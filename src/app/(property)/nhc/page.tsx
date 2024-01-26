/**
 * v0 by Vercel.
 * @see https://v0.dev/t/owX1STG76Wm
 */
import Image from 'next/image';
import Link from 'next/link';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';

export default function Component() {
  return (
    <section className='w-full py-3'>
      <div className='container grid gap-6 md:gap-8 px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
          <div className='grid gap-1'>
            <h1 className='text-2xl font-bold tracking-tight'>
              Apartment Buildings
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Find the perfect apartment for you.
            </p>
          </div>
        </div>
        <div className='grid sm:grid-cols-2 max-w-4xl lg:grid-cols-3 gap-4'>
          <div className='grid gap-3'>
            <Image
              alt='Apartment Building 1'
              className='rounded-lg object-cover transition-opacity'
              height={200}
              src='/images/apartment.jpg'
              width={300}
            />
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Apartment Building 1</h3>
              <p className='text-sm leading-none'>Street, City, Country</p>
              <p className='text-sm leading-none'>Number of Units: 100</p>
              <p className='text-sm leading-none'>Architecture: Modern</p>
            </div>
            <Link
              href=''
              className='font-semibold underline underline-offset-4'>
              View
            </Link>
          </div>
          <div className='grid gap-3'>
            <Image
              alt='Apartment Building 1'
              className='rounded-lg object-cover transition-opacity'
              height={200}
              src='/images/apartment3.jpg'
              width={300}
            />
            <div className='grid gap-1'>
              <h3 className='font-semibold'>Apartment Building 1</h3>
              <p className='text-sm leading-none'>Street, City, Country</p>
              <p className='text-sm leading-none'>Number of Units: 100</p>
              <p className='text-sm leading-none'>Architecture: Modern</p>
            </div>
            <Link
              href=''
              className='font-semibold underline underline-offset-4'>
              View
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w1M53VxFBS0
 */
