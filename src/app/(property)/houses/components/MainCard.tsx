import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import HouseRooms from './HouseRooms';
import { formatPrice } from '@/utils/formatPrice';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';

interface Props {
  data: Accommodation;
}

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

function MainCard({ data }: Props) {
  return (
    <section className='max-w-[900px] px-3 md:px-10 m-auto'>
      <ImageFigure images={data.images} />
      <Card className=' my-4 px-4 rounded-sm flex justify-between'>
        <div>
          <CardHeader>
            <div className='flex flex-col space-y-2'>
              <h1 className={cn('text-3xl capitalize', merriweather.className)}>
                {data.type}
              </h1>
              <p className='text-gray-500'>
                {data.location.street}, {data.location.city},
                {data.location.country}
              </p>
            </div>
          </CardHeader>

          <CardContent className='flex gap-8 md:items-center flex-col md:flex-row items-start justify-between'>
            <div className='md:flex gap-2 flex-col'>
              <h3 className='flex items-center gap-1'>
                <span>Tsh</span>
                <span className='text-xl font-extrabold'>
                  {formatPrice(data?.price.amount)}
                </span>
                <span>{data.price.duration}</span>
              </h3>
            </div>
          </CardContent>
        </div>
        <figure className='flex justify-center items-center gap-4'>
          <UserAvatar />
          <figcaption className='flex flex-col'>
            <span
              className={cn(
                'dark:text-[#e6f1ff] font-bold tracking-wide text-base',
                merriweather.className
              )}>
              Zahara Ibrahim
            </span>

            <span className={`dark:text-[#ccd6f6] text-base`}>
              +255629179067
            </span>
          </figcaption>
        </figure>
      </Card>
      <HouseRooms room={data.room} bath={data.bath} kitchen={data.kitchen} />

      <Card className='my-4 p-3'>
        <CardContent>
          <div className='flex flex-col space-y-4'>
            <h2
              className={cn('text-2xl tracking-wider', merriweather.className)}>
              Amenities
            </h2>
            <ul className='grid grid-cols-2 gap-2'>
              <li>Free Wi-Fi</li>
              <li>24/7 Security</li>
              <li>Swimming Pool</li>
              <li>Gym</li>
              <li>Free Parking</li>
              <li>Laundry Service</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle className={cn('tracking-wider', merriweather.className)}>
            Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data?.description}</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}

export default MainCard;
