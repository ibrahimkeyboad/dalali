'use client';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';

type Props = {
  images: {
    uri: string;
    public_id: string;
  }[];
};

const ImageFigure = ({ images }: Props) => {
  return (
    <Carousel className=' mx-auto max-w-full'>
      <CarouselContent className='h-[600px]'>
        {images?.map((img, i) => (
          <CarouselItem className='relative' key={i}>
            <AspectRatio>
              <Image
                quality={100}
                alt=''
                className='object-cover object-top rounded-lg'
                priority
                src={`/images/${img.uri}`}
                fill
                sizes='(min-width: 768px) 90vw, (min-width: 1200px) 50vw, 33vw'
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-2' />
      <CarouselNext className='right-2' />
    </Carousel>
  );
};

export default ImageFigure;
