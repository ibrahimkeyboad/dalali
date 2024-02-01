'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const links = [
  {
    name: 'All',
    link: '/',
  },
  {
    name: 'NHC',
    link: '/nhc',
  },
  {
    name: 'Apartments',
    link: '/apartments',
  },
  {
    name: 'Houses',
    link: '/houses',
  },
  {
    name: 'Frames',
    link: '/frames',
  },
  // {
  //   name: 'Hostels',
  //   link: '/hostels',
  // },
  // {
  //   name: 'Geust Houses',
  //   link: '/geusthouses',
  // },
  // {
  //   name: 'Lodges',
  //   link: '/lodges',
  // },
];

function Nav() {
  const asPath = usePathname();

  return (
    <>
      {!asPath.includes('search') && (
        <nav className='flex gap-10 my-1 py-3 justify-center'>
          <Carousel
            opts={{
              align: 'start',
            }}
            className='w-[80%] mx-4 sm:mx-auto sm:max-w-lg '>
            <CarouselContent className='gap-10 ml-0'>
              {links.map((link) => (
                <CarouselItem key={link.link} className='basis-auto'>
                  <Link
                    key={link.name}
                    className={cn(
                      'text-sm whitespace-nowrap text-center text-slate-900 hover:font-bold duration-100 transition-all border-transparent',
                      asPath === link.link ? 'font-bold' : 'font-normal '
                    )}
                    href={link.link}>
                    {link.name}
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='md:hidden' />
            <CarouselNext className='md:hidden' />
          </Carousel>
        </nav>
      )}
    </>
  );
}

export default Nav;
