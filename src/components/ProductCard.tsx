import { formatPrice } from '@/lib/formatPrice'
import { Product } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import { date } from 'zod'

interface productCardProps {
  product: Product
}

export default function ProductCard({ product }: productCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 10

  return (
    <Link
      href={'/products/' + product.id}
      className="card w-full bg-secondary  shadow-lg transition-shadow hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={1200}
          height={300}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          {isNew && <div className="badge badge-info">NEW</div>}
        </h2>
        <p>{product.discription}</p>
        <span className="badge">{product.price}$</span>
      </div>
    </Link>
  )
}
/*<div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */
