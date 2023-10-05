import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import React from 'react';
import HouseRooms from '../components/HouseRooms';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Header from '@/components/header/Header';
import { Badge } from '@/components/ui/badge';

export function generateMetadata({ params }: { params: { houseId: string } }) {
  return {
    title: `Home: ${params.houseId}`,
  };
}

async function Apartment({ params }: { params: { houseId: string } }) {
  // const res = await fetch('http://localhost:3000/api/apartment');
  // const data = await res.json();

  const data: any = {
    id: 'faf1',
    images: ['/images/home.jpg'],
    duration: 'mwezi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium hic quia labore corrupti est, optio tenetur culpa quis quibusdam esse sunt minima ipsam repellendus eligendi incidunt aliquam quam dolores sit deserunt beatae possimus pariatur eveniet repudiandae qui. Porro beatae corrupti nisi maxime nam laboriosam doloribus dignissimos id voluptatem quae corporis natus dolorum, repellendus, totam facilis! Odio accusantium laboriosam cupiditate optio illo aliquid. Ut corrupti dolorem ab provident quo numquam quae.',
    bedrooms: 2,
    city: 'Arusha',
    street: 'Ngulelo',
    country: 'Tanzania',
    offers: ['umeme', 'maji', 'geti', 'majirani'],
    price: 500000,
    purpose: 'inakodishwa',
    userId: 'ie',
    category: 'house',
    owner: {
      name: 'Pisi Kali',
      phoneNumber: '+255620179067',
    },
  };

  const datas = {
    images: data.images,
  };

  return (
    <>
      <Header />
      <div className='bg-background'>
        <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
          <ImageFigure data={datas} />
          <div className={`bg-card p-3 my-4  rounded-sm divide-y`}>
            <div className='flex items-center justify-between p-5'>
              <h2 className='tracking-widest font-bold text-3xl'>Overview</h2>
              <Badge className='capitalize' variant='secondary'>
                {data?.purpose}
              </Badge>
            </div>
            <div>
              <Card className='p-4 flex gap-8 md:items-center flex-col md:flex-row items-start justify-between'>
                <div className='md:flex gap-2 flex-col'>
                  <h3 className='flex items-center gap-1'>
                    <span>Tsh</span>
                    <span className='text-xl font-extrabold'>
                      {data?.price
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    <span>{data.duration}</span>
                  </h3>
                  <h3 className=''>
                    {`${data.street}, ${data.city} ${data.country}`}
                  </h3>
                </div>
                <figure className='flex justify-center items-center gap-4'>
                  <UserAvatar />
                  <figcaption className='flex flex-col'>
                    <span
                      className={`dark:text-[#e6f1ff] font-bold tracking-wide text-base`}>
                      {data?.owner?.name}
                    </span>
                    <span className={`dark:text-[#ccd6f6] font-bold text-base`}>
                      {data?.owner?.phoneNumber}
                    </span>
                  </figcaption>
                </figure>
              </Card>
            </div>
          </div>
          <HouseRooms />/
          <Card>
            <CardHeader>
              <CardTitle>What this place offers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flexgap-5 flex-col'>
                <ul className='flex flex-wrap gap-10'>
                  {data?.offers?.map((tag: any) => (
                    <li className='capitalize' key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{data?.description}</CardDescription>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Apartment;
