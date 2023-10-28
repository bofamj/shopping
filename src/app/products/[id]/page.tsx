import prisma from '@/lib/db/prisma'

import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cache } from 'react'

interface productsProps {
  params: {
    id: string
  }
}

//* CACHE THE PRODUCT TO PASET TO THE METADATA & THE FUNCTION
const getProdact = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } })
  if (!product) notFound()
  return product
})

export async function generateMetadata({
  params: { id },
}: productsProps): Promise<Metadata> {
  const product = await getProdact(id)
  return {
    title: product.name + ' - shep shope',
    description: product.discription,
    openGraph: {
      images: [{ url: product.imageUrl }],
    },
  }
}

export default async function singelProduactPage({
  params: { id },
}: productsProps) {
  const product = await getProdact(id)

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
      />
      <div>
        <h1 className="text-5xl font-bold">{product?.name}</h1>
        <span className="badge mt-3 border-none bg-info px-3 text-white">
          {product?.price}$
        </span>
        <p className="py-6">{product?.discription}</p>
      </div>
    </div>
  )
}
