import NavSkeleton from '@/components/header/NavSkeleton';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

function Loading() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <NavSkeleton />
      </header>

      <main
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
'>
        {arr.map((el) => (
          <article key={el} className='w-full overflow-hidden'>
            <Skeleton className='rounded-lg w-full h-52' />
            <div
              className='
            flex
            gap-4
            flex-col
            overflow-hidden
            p-2'>
              <div className='flex gap-2'>
                <Skeleton className='h-4 w-14' />
                <Skeleton className='h-4 w-14' />
                <Skeleton className='h-4 w-14' />
                <Skeleton className='h-4 w-14' />
              </div>
              <Skeleton className='h-5 w-28 ' />
              <Skeleton className='h-5 w-32 ' />
              <Skeleton className='h-5 w-40 ' />
            </div>
          </article>
        ))}
      </main>
    </>
  );
}

export default Loading;
