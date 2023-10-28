import prisma from '@/lib/db/prisma'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface productsProps {
  params: {
    id: string
  }
}

export default async function singelProduactPage({
  params: { id },
}: productsProps) {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) notFound()

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
      />
      <div>
        <h1 className="text-5xl font-bold">{product?.name}</h1>
        <span className="badge">{product?.price}$</span>
        <p className="py-6">{product?.discription}</p>
      </div>
    </div>
  )
}
