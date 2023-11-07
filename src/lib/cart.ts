import prisma from './db/prisma'
import { cookies } from 'next/dist/client/components/headers'
import { Cart, Prisma } from '@prisma/client'
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
