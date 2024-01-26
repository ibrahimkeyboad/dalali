import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import Link from 'next/link';
const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

export default function NotFound() {

  return (
    <div className='grid gap-2 place-items-center h-screen content-center'>
      <h1 className={cn('text-4xl font-bold', merriweather.className)}>
        Not Found
      </h1>
      <p className='text-lg'>This Page is not found</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
