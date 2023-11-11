import ProductCard from '@/components/ProductCard'
import prisma from '../lib/db/prisma'
import Image from 'next/image'
import Link from 'next/link'
import PaginationBar from '@/components/PaginationBar'

interface Props {
  searchParams: { page: string }
}

export default async function Home({ searchParams: { page = '1' } }: Props) {
  const pageNumper = parseInt(page)
  const pageSize = 9
  const heroItem = 1
  const totalProductsCount = await prisma.product.count()
  const totalPages = Math.ceil((totalProductsCount - heroItem) / pageSize)

  const product = await prisma.product.findMany({
    orderBy: { id: 'desc' },
    skip: (pageNumper - 1) * pageSize + (pageNumper === 1 ? 0 : heroItem),
    take: pageSize + (pageNumper === 1 ? heroItem : 0),
  })
  return (
    <div className=" flex flex-col items-center pb-5 text-white">
      {pageNumper === 1 && (
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
                href={'/products/' + product[0].id}
                className="btn btn-primary"
              >
                Chek it out
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="my-24 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {(pageNumper === 1 ? product.slice(1) : product).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <PaginationBar currentPage={pageNumper} totalPages={totalPages} />
    </div>
  )
}
