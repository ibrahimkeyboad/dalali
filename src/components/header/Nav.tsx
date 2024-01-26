'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        <ul className='flex gap-10 my-1 py-3 overflow-auto justify-center'>
          {links.map((link) => (
            <Link
              key={link.name}
              className={cn(
                'text-sm whitespace-nowrap text-slate-900 hover:font-bold py-4 duration-100 transition-all border-transparent',
                asPath === link.link ? 'font-bold' : 'font-normal '
              )}
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
