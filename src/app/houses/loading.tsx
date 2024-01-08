import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function loading() {
  return (
    <>
      <header className='px-5 py-6 m-auto flex flex-col divide-y'>
        <nav className='flex justify-between pb-6 items-center flex-wrap place-content-around md:px-9'>
          <Skeleton className='w-20 h-10' />

          <nav className='flex items-center gap-3'>
            <Skeleton className='p-5' />
            <Skeleton className='h-10 w-12 rounded-md' />
            <Skeleton className='h-10 w-12 rounded-full' />
          </nav>
        </nav>
      </header>
      <Skeleton
        className='
          px-8 
          grid 
          grid-cols-1 
          gap-4 
          sm:grid-cols-2
          justify-items-center
          sm:gap-2
          md:grid-cols-3
          md:gap-3
          xl:grid-cols-5
          xl:gap-x-4
          xl:gap-y-8
'
      />
    </>
  );
}

export default loading;
