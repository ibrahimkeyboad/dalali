import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/header/Header';
import Container from '@/components/Container';

export default function Component() {
  return (
    <>
      <Header />

      <div className='text-center my-6'>
        <h1 className='text-2xl font-bold tracking-tight'>
          Apartment Buildings
        </h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Find the perfect apartment for you.
        </p>
      </div>
      <Container>
        <div className='grid gap-3'>
          <figure className='relative h-[300px] w-full'>
            <Image
              priority
              fill
              alt='Apartment Building 1'
              className='rounded-lg object-cover object-center transition-opacity'
              src='/images/apartment.jpg'
            />
          </figure>

          <div className='grid gap-1'>
            <h3 className='font-semibold'>Apartment Building 1</h3>
            <p className='text-sm leading-none'>Street, City, Country</p>
            <p className='text-sm leading-none'>Number of Units: 100</p>
            <p className='text-sm leading-none'>Architecture: Modern</p>
          </div>
          <Link
            href='/nhc/id'
            className='font-semibold underline underline-offset-4'>
            View
          </Link>
        </div>
      </Container>
    </>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w1M53VxFBS0
 */
