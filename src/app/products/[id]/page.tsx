import prisma from '@/lib/db/prisma'
import Link from 'next/link'
import { addToCart } from './actions'

import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { cache } from 'react'

import ImageGalleryComp from '@/components/ImageGalleryComp'
import AddtoCartButton from './AddtoCartButton'

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
    <>
      <div className="rounded-sm py-4 shadow-lg">
        <ImageGalleryComp images={...product.images} />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">{product?.name}</h1>
          <span className="badge mt-3 border-none bg-accent px-3 text-white">
            {product?.price}$
          </span>
          <p className="py-6">{product?.discription}</p>
          <AddtoCartButton productId={product.id} addToCart={addToCart} />
        </div>
      </div>
    </>
  )
}
//<div className="flex  flex-row gap-4 lg:items-center">
//!Carousel image slider
/*<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div> */
/*<div className="carousel w-full">
        <div id="item" className="carousel-item w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={900}
            height={400}
          />
        </div>
      </div>
      <div className="flex max-h-2 w-full justify-center gap-2 py-2">
        {product.images.map((img, index: number) => {
          return (
            <Link href={`#${index}`} key={index}>
              <Image src={img} alt="product image" width={300} height={200} />
            </Link>
          )
        })}
      </div> */
