'use server'

import { findCart, creatCart } from '@/lib/cart'
import prisma from '@/lib/db/prisma'
import { revalidatePath } from 'next/cache'

export async function addToCart(productId: string) {
  const cart = (await findCart()) ?? (await creatCart())

  const productInCart = cart.items.find((item) => item.id === productId)

  if (productInCart) {
    await prisma.cartItime.update({
      where: { id: productId },
      data: { quantity: { increment: 1 } },
    })
  } else {
    await prisma.cartItime.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    })
  }

  revalidatePath('/products/[id]')
}
