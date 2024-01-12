'use client';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Props = {
  images: [
    {
      uri: string;
      public_id: string;
    }
  ];
};

const ImageFigure = ({ images }: Props) => {
  return (
    <Carousel className=' mx-auto w-[900px]'>
      <CarouselContent className=' rounded-md h-[600px]'>
        {images?.map((img, i) => (
          <CarouselItem className='h-[600px] relative' key={i}>
            <Image
              quality={100}
              alt=''
              className='object-cover'
              priority
              src={`/images/${img.uri}`}
              fill
              sizes='(min-width: 768px) 90vw, (min-width: 1200px) 50vw, 33vw'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageFigure;
