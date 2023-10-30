import prisma from './db/prisma'
import { cookies } from 'next/dist/client/components/headers'
import { Cart, Prisma } from '@prisma/client'

export type cartItems = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } }
}>

export type ShoppingCart = cartItems & {
  size: number
  subtotal: number
}

//*creat new cart
export async function creatCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  })
  //* save the cart id to the  cookie
  cookies().set('localCartId', newCart.id)
  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  }
}

//* find a cart

export async function findCart(): Promise<ShoppingCart | null> {
  const localID = cookies().get('localCartId')?.value
  const cart = localID
    ? await prisma.cart.findUnique({
        where: { id: localID },
        include: { items: { include: { product: true } } },
      })
    : null
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
