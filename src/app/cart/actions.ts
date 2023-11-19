'use server'

import { creatCart, findCart } from '@/lib/cart'
import prisma from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'

export async function changeCartProductQuantity(
  productId: string,
  quantity: number,
) {
  const cart = (await findCart()) ?? (await creatCart())
  const productInCart = cart.items.find((item) => item.productId === productId)

  if (quantity === 0) {
    if (productInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: { delete: { id: productInCart.id } },
        },
      })
      /*  await prisma.cartItime.delete({
        where: { id: productInCart.id },
      }) */
    }
  } else {
    if (productInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: {
              where: { id: productInCart.id },
              data: { quantity },
            },
          },
        },
      })
      /*  await prisma.cartItime.update({
        where: { id: productInCart.id },
        data: { quantity },
      }) */
    } else {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: {
              productId,
              quantity,
            },
          },
        },
      })

      /*  await prisma.cartItime.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      }) */
    }
  }
  revalidatePath('/cart')
}
