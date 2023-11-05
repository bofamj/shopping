import { CartItemProduct } from '@/lib/cart'
import Image from 'next/image'
import Link from 'next/link'

interface cartItemProps {
  cartItem: CartItemProduct
}

export default function CartItem({
  cartItem: { product, quantity },
}: cartItemProps) {
  const quantityOption: JSX.Element[] = []
  for (let x = 0; x <= 99; x++) {
    quantityOption.push(
      <option key={x} value={x}>
        {x}
      </option>,
    )
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
        />
        <div>
          <Link href={'/products/' + product.id} className="font-bold">
            {product.name}
          </Link>
          <h1>Price: ${product.price}</h1>
          <div className="my-2 flex items-center gap-3">
            Quantity:{' '}
            <select
              className="select select-bordered w-full max-w-[73px] "
              defaultValue={quantity}
            >
              {quantityOption}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Totl: ${quantity * product.price}
          </div>
        </div>
      </div>

      <div className="divider" />
    </div>
  )
}
