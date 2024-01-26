'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { IoLocationOutline } from 'react-icons/io5';
import Header from '@/components/header/Header';
import ImageFigure from '@/components/ImageFigure';
import ApartmentCard from '../../apartments/_component/ApartmentCard';
import { BiCar } from 'react-icons/bi';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

const images = [
  {
    uri: 'apartment.jpg',
    public_id: '',
  },

  {
    uri: 'apartment3.jpg',
    public_id: '',
  },
];

const data = [
  {
    id: 1,
    images: [],
    title: '',
    vituVilivyopo: [],
  },
  {
    id: 2,
    mapicha: [],
    title: '',
    vituVilivyopo: [],
    idadi: 10,
    vilivyopo: 6,
    price: 29933,
    located: '',
    duction: '',
  },
];

function Page() {
  return (
    <>
      <Header />
      <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
        <div className='mb-4'>
          <ImageFigure images={images} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle
              className={cn(
                ' capitalize tracking-wider',
                merriweather.className
              )}></CardTitle>
            <div className='flex flex-col space-y-2'>
              <h1 className={cn('text-3xl font-bold', merriweather.className)}>
                VICTORIA PLACE - DAR ES SALAAM
              </h1>
              <p className='text-gray-500'>
                Kinondoni, Kijitonyama, Dar es salama
              </p>
              <p className='text-gray-500'>located</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col space-y-4'>
              <h2 className={cn('text-2xl font-bold', merriweather.className)}>
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

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-8'>
          {data.map((item) => (
            <ApartmentCard key={item.id} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className={merriweather.className}>
              What this Apartment have
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='grid grid-cols-2 gap-2'>
              3 swimming pools
              <li>water</li>
              <li>umeme</li>
              <li>geti</li>
              <li>Gymnasium</li>
              <li>Clubhouse</li>
              <li> Kids playing area</li>
              <li>SECURITY SYSTEM</li>
              <li>COMMERCIAL SPACE</li>
              <li className='flex gap-2 items-center'>
                <BiCar className='w-6 h-6' />
                <h4>Packing</h4>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className='mt-3'>
          <CardHeader>
            <CardTitle>
              <h2 className={cn('text-2xl font-bold', merriweather.className)}>
                About the Area
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-gray-500'>
              For 40 years, Steven Emmanuel, lived at former Victoria House on
              new Bagamoyo road and never thought of moving. Two things made him
              fall in love with his place all this time, the convenience and
              privacy. On these same plots, NHC has built the all-modern
              VICTORIA PLACE, a blend of 2,3 and 3 bedroom apartments that gives
              you the same things that made Steve a tenant for 40 years. Come
              build everlasting memories in these modern apartments with
              well-equipped gymnasium, swimming pool and surrounded by schools,
              retail shopping center, financial institutions and offices.
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Page;
