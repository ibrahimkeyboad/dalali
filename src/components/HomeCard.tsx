'use client';

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';
import { BathIcon, BedIcon } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { formatPrice } from '@/utils/formatPrice';
import Link from 'next/link';

type HomeCardType = {
  images: {
    uri: string;
    title?: string;
    public_id: string;
  }[];
  id: string;
  title?: string;
  price: Price;

  location: {
    street: string;
    city: string;
    country: string;
  };
  rooms: Room[];
  bath: Bath[];
  size: number;
  category: string;
};

function HomeCard({
  id,
  bath,
  images,
  location,
  price,
  rooms,
  size,
  title,
  category,
}: HomeCardType) {
  const bathtotal = bath.length;
  const roomtotal = rooms.length;

  return (
    <article className='relative group cursor-pointer grow basis-[350px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2'>
      <Carousel className='w-full'>
        <CarouselContent className='h-[300px]'>
          <CarouselItem className='relative'>
            <AspectRatio
            // ratio={16 / 9}
            >
              <Image
                alt='Apartment 1'
                fill
                priority
                className='object-cover'
                src='/images/cover3.jpg'
              />
            </AspectRatio>
          </CarouselItem>

          <CarouselItem className='relative w-full'>
            <AspectRatio
            // ratio={16 / 9}
            >
              <Image
                alt='Apartment 1'
                fill
                priority
                className='object-cover'
                src='/images/cover2.jpg'
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='left-1' />
        <CarouselNext className='right-1' />
      </Carousel>
      <Link
        href={`/${category}s/${id}`}
        className='bg-white p-4 block dark:bg-gray-950'>
        <h3 className='font-semibold capitalizes text-lg md:text-xl'>
          {title}
        </h3>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          {location.street}, {location.city}
        </p>
        <p className='text-sm text-gray-500 dark:text-gray-400'></p>
        <h4 className='font-semibold text-base md:text-lg'>
          Tsh {formatPrice(price.amount)} / {price.duration}
        </h4>
        <div className='flex items-center gap-2 mt-2'>
          <BedIcon className='w-5 h-5' />
          <span>{roomtotal} rooms</span>
          <BathIcon className='w-5 h-5 ml-4' />
          <span>{bathtotal} baths</span>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
          1200 sqft
        </p>
      </Link>
    </article>
  );
}

export default HomeCard;
