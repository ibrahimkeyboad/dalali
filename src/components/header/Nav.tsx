'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePathname } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const links = [
  {
    name: 'All',
    link: '/',
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
    name: 'Hostels',
    link: '/hostels',
  },
  {
    name: 'Frames',
    link: '/frames',
  },
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
        <ul className='flex gap-10 p-2 overflow-auto'>
          {links.map((link) => (
            <Link
              key={link.name}
              className={`text-sm whitespace-nowrap my-3 mx-0 md:mx-4 ${
                asPath === link.link
                  ? '  font-bold'
                  : 'font-normal text-slate-500'
              }`}
              href={link.link}>
              {link.name}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}

export default Nav;
