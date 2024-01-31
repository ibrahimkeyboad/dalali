import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';
import { BathIcon, BedIcon } from 'lucide-react';
import Image from 'next/image';

function HomeCard() {
  return (
    <div className='relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'>
      <Carousel className='w-full h-60'>
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={400 / 300}>
              <Image
                priority
                alt='Apartment 1'
                className='object-cover w-full h-full'
                height={300}
                src='/placeholder.svg'
                style={{
                  objectFit: 'cover',
                }}
                width={400}
              />
            </AspectRatio>
          </CarouselItem>

          <CarouselItem>
            <AspectRatio ratio={400 / 300}>
              <Image
                priority
                alt='Apartment 1'
                className='object-cover w-full h-full'
                height={300}
                src='/placeholder.svg'
                style={{
                  objectFit: 'cover',
                }}
                width={400}
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='bg-white p-4 dark:bg-gray-950'>
        <h3 className='font-semibold text-lg md:text-xl'>Luxury Apartment</h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>123 Main St</p>
        <p className='text-sm text-gray-500 dark:text-gray-400'>New York, NY</p>
        <h4 className='font-semibold text-base md:text-lg'>$2,500 / month</h4>
        <div className='flex items-center gap-2 mt-2'>
          <BedIcon className='w-5 h-5' />
          <span>3 rooms</span>
          <BathIcon className='w-5 h-5 ml-4' />
          <span>2 baths</span>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
          1200 sqft
        </p>
      </div>
    </div>
  );
}

export default HomeCard;
