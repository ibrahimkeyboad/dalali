import { cn } from '@/lib/utils';
import { Merriweather } from 'next/font/google';
import Link from 'next/link';
const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

export default function NotFound() {
  return (
    <div className='grid gap-2 place-items-center h-screen content-center'>
      <h1 className={cn('text-7xl font-bold', merriweather.className)}>
        Ukurasa Haupo
      </h1>
      <p className='text-xl'>Ukurasa unao utafuta haupo</p>
      <Link className='hover:underline' href='/'>
        Return Home
      </Link>
    </div>
  );
}
