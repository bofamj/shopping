'use client'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

export default function ImageGalleryComp(images: any) {
  return (
    <Carousel>
      {images.images.map((item: string, index: number) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  )
}
const CarouselItem = ({ item }: any) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={item}
        alt={item.caption}
        width={500}
        height={400}
        className="rounded-md shadow-lg"
      />
      <p>{item.caption}</p>
    </div>
  )
}
