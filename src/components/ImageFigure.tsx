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
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

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
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={`/images/${img.uri}`}
                  alt='apt'
                  width={879}
                  height={586}
                  className='object-cover cursor-pointer'
                />
              </DialogTrigger>
              <DialogContent className='max-w-[80vw] h-[90vh]'>
                <Carousel className='w-full h-[900px]'>
                  <CarouselContent className=''>
                    <CarouselItem key={i} className='relative h-[85vh]'>
                      <Image
                        alt='Apartment 1'
                        fill
                        priority
                        className='object-cover'
                        src={`/images/${img.uri}`}
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className='left-1' />
                  <CarouselNext className='right-1' />
                </Carousel>

                {/* <figure className='relative'>
          <Image
            src='/demo/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg'
            alt='apt'
            fill
            priority
            className='object-cover cursor-pointer'
          />
        </figure> */}
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-2' />
      <CarouselNext className='right-2' />
    </Carousel>
  );
};

export default ImageFigure;
