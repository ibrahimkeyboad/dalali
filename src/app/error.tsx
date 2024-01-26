'use client'; // Error components must be Client Components

import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import { useEffect } from 'react';
const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);
  console.error(error);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <h2 className={cn('text-4xl', merriweather.className)}>
        Something went wrong!{' '}
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }>
        Try again
      </button>

    
    </div>
  );
}
