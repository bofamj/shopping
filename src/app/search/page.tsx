import ProductCard from '@/components/ProductCard'
import prisma from '@/lib/db/prisma'

interface searchProps {
  searchParams: { query: string }
}

export default async function SearchPage({
  searchParams: { query },
}: searchProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { discription: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: { id: 'desc' },
  })

  if (products.length === 0) {
    return <div className="text-center">No products found</div>
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
