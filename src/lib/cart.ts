import prisma from './db/prisma'
import { cookies } from 'next/dist/client/components/headers'
import { Cart, Prisma, CartItime } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export type cartItems = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } }
}>

export type CartItemProduct = Prisma.CartItimeGetPayload<{
  include: { product: true }
}>

export type ShoppingCart = cartItems & {
  size: number
  subtotal: number
}

//*creat new cart
export async function creatCart(): Promise<ShoppingCart> {
  const session = await getServerSession(authOptions)

  let newCart: Cart
  if (session) {
    newCart = await prisma.cart.create({
      data: { userId: session.user.id },
    })
  } else {
    newCart = await prisma.cart.create({
      data: {},
    })
    //* save the cart id to the  cookie
    cookies().set('localCartId', newCart.id)
  }

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  }
}

//* find a cart

export async function findCart(): Promise<ShoppingCart | null> {
  const session = await getServerSession(authOptions)
  const localID = cookies().get('localCartId')?.value

  let cart: cartItems | null = null
  if (session) {
    cart = await prisma.cart.findFirst({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    })
  } else {
    cart = localID
      ? await prisma.cart.findUnique({
          where: { id: localID },
          include: { items: { include: { product: true } } },
        })
      : null
  }
  if (!cart) {
    return null
  }
  return {
    ...cart,
    size: cart.items.reduce((accum, item) => accum + item.quantity, 0),
    subtotal: cart.items.reduce(
      (accum, item) => accum + item.quantity * item.product.price,
      0,
    ),
  }
}

//*MERGING THE ANONYMOUS CART ANT THE UOSER CART
export async function mergeCrt(userId: string) {
  const localID = cookies().get('localCartId')?.value

  //*find the anonymous cart if any
  const anonymousCart = localID
    ? await prisma.cart.findUnique({
        where: { id: localID },
        include: { items: true },
      })
    : null

  if (!anonymousCart) return

  //*find the user cart

  const userCart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: true },
  })
  await prisma.$transaction(async (tx) => {
    if (userCart) {
      const mergedCartItems = mergeCartItems(
        userCart.items,
        anonymousCart.items,
      )

      ///*delet the existing cart items
      await tx.cartItime.deleteMany({
        where: { cartId: userCart.id },
      })

      await tx.cartItime.createMany({
        data: mergedCartItems.map((item) => ({
          cartId: userCart.id,
          productId: item.productId,
          quantity: item.quantity,
        })),
      })
    } else {
      //* if there are no user cart created yet, create a new one
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: anonymousCart.items.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      })
    }
    await tx.cart.delete({
      where: { id: anonymousCart.id },
    })
    cookies().set('localCartId', '')
  })
}

function mergeCartItems(...cartItems: CartItime[][]): CartItime[] {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        acc.push(item)
      }
    })
    return acc
  }, [] as CartItime[])
}
