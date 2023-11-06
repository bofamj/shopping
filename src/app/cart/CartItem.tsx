'use client'
import { CartItemProduct } from '@/lib/cart'
import { useTransition } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface cartItemProps {
  cartItem: CartItemProduct
  changeCartProductQuantity: (
    productId: string,
    quantity: number,
  ) => Promise<void>
}

export default function CartItem({
  cartItem: { product, quantity },
  changeCartProductQuantity,
}: cartItemProps) {
  const [isPindng, startTransition] = useTransition()
  const quantityOption: JSX.Element[] = []
  for (let x = 0; x <= 99; x++) {
    quantityOption.push(
      <option key={x} value={x}>
        {x}
      </option>,
    )
  }

  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="shadow-lg"
        />
        <div className="text-start">
          <Link href={'/products/' + product.id} className="font-bold">
            {product.name}
          </Link>
          <h1>Price: ${product.price}</h1>
          <div className="my-2 flex items-center gap-3 ">
            Quantity:{' '}
            <select
              className="select select-bordered w-full max-w-[73px] shadow-lg"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value)
                startTransition(async () => {
                  await changeCartProductQuantity(product.id, newQuantity)
                })
              }}
            >
              {quantityOption}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Totl: ${quantity * product.price}
          </div>
          {isPindng && (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </div>
      </div>

      <div className="divider" />
    </div>
  )
}
