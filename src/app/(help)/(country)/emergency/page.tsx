import Header from '@/components/header/Header';
import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

function Emergency() {
  return (
    <>
      <Header />
      <section className='flex flex-col items-center justify-center space-y-4'>
        <div className='space-y-2 my-10 text-center'>
          <h2 className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
            Emergency Services
          </h2>
          <h1 className='lg:leading-tighter text-3xl font-bold tracking-normal sm:text-5xl'>
            {`Pata msaada wa haraka`}
          </h1>
          <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
            Pata msaada au toa tarifa kuhusiana na jambo ambalo linahitaji
            msaada
          </p>
        </div>
        <ul className='grid px-8 sm:px-6 max-w-[1200px] gap-4 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]'>
          <li>
            <figure className='h-[300px] relative mb-2'>
              <Image
                className='rounded-lg object-cover'
                src='/images/emergency/tanesco.jpg'
                alt='tanesco'
                fill
              />
            </figure>
            <h3
              className={cn('text-[#2A2D34] text-2xl', merriweather.className)}>
              Tanesco
            </h3>
            <p className='max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400'>
              The Fire Department provides fire protection and emergency medical
              services to the community.
            </p>
          </li>
          <li>
            <figure className='h-[300px] relative mb-2'>
              <Image
                className='rounded-lg object-cover'
                src='/images/emergency/zima.jpg'
                alt='Zima moto'
                fill
              />
            </figure>

            <h3
              className={cn('text-[#2A2D34] text-2xl', merriweather.className)}>
              Zima moto
            </h3>
            <p className='max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400'>
              The Fire Department provides fire protection and emergency medical
              services to the community.
            </p>
          </li>
          <li>
            <figure className='h-[300px] relative mb-2'>
              <Image
                className='rounded-lg object-cover'
                src='/images/emergency/polisi.webp'
                alt='polisi'
                fill
              />
            </figure>
            <h3
              className={cn('text-[#2A2D34] text-2xl', merriweather.className)}>
              Polisi
            </h3>
            <p className='max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400'>
              The Fire Department provides fire protection and emergency medical
              services to the community.
            </p>
          </li>
          <li>
            <figure className='h-[300px] relative mb-2'>
              <Image
                className='rounded-lg object-cover'
                src='/images/emergency/ambulence.jpg'
                alt='ambulence'
                fill
              />
            </figure>
            <h3
              className={cn('text-[#2A2D34] text-2xl', merriweather.className)}>
              Ambulence
            </h3>
            <p className='max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400'>
              The Fire Department provides fire protection and emergency medical
              services to the community.
            </p>
          </li>
          <li>
            <figure className='h-[300px] relative mb-2'>
              <Image
                className='rounded-lg object-cover'
                src='/images/emergency/water.jpg'
                alt='idadi ya maji'
                fill
              />
            </figure>
            <h3
              className={cn('text-[#2A2D34] text-2xl', merriweather.className)}>
              Idara ya maji
            </h3>
            <p className='max-w-[600px] text-gray-500 md:text-base dark:text-gray-400'>
              The Fire Department provides fire protection and emergency medical
              services to the community.
            </p>
          </li>
        </ul>

        <footer></footer>
      </section>
    </>
  );
}

export default Emergency;
