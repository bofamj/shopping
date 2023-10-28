import ProductCard from '@/components/ProductCard'
import prisma from '../lib/db/prisma'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: { id: 'desc' },
  })
  return (
    <div className=" text-white">
      <div className="hero rounded-xl bg-base-200 ">
        <div className="hero-content flex-col gap-7 lg:flex-row">
          <Image
            src={product[0].imageUrl}
            alt={product[0].name}
            width={400}
            height={800}
            className="shadow-black-2xl w-full max-w-sm rounded-lg"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{product[0].name}</h1>
            <p className="py-6">{product[0].discription}</p>
            <Link
              href={'/products' + product[0].id}
              className="btn btn-primary"
            >
              Chek it out
            </Link>
          </div>
        </div>
      </div>
      <div className="my-24 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {product.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
