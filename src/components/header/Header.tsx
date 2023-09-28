'use client';

import Link from 'next/link';
import Image from 'next/image';

import Searching from './Searching';
import Theme from './Theme';
import UserAvatar from '../UserAvatar';
import Nav from './Nav';
import { usePathname } from 'next/navigation';

function Header() {
  const data: any = {};
  const path = usePathname();

  return (
    <header className='px-5 py-6 max-w-7xl m-auto flex flex-col divide-y'>
      <nav className='flex justify-between pb-6 items-center flex-wrap place-content-around md:px-9'>
        <Link className={`font-bold text-2xl dark:text-[#CCD6F6] `} href='/'>
          Dalali
        </Link>

        <Searching />

        <nav className='flex items-center gap-3'>
          <Theme />
          {data ? (
            <Link href='/profile'>
              <UserAvatar />
            </Link>
          ) : (
            <div className='flex gap-4 items-center'>
              <Link className='dark:text-[#64FFDA] px-3 py-1' href='/login'>
                Login
              </Link>
              <Link
                className='dark:border-[#64FFDA] dark:text-[#64FFDA] border-gray-800 border-2 text-gray-800 px-3 py-2 rounded-lg'
                href='/signup'>
                Get Start
              </Link>
            </div>
          )}
        </nav>
      </nav>

      {path === '/' && <Nav />}
      {path === '/apartments' && <Nav />}
      {path === '/houses' && <Nav />}
      {path === '/hostels' && <Nav />}
      {path === '/lodges' && <Nav />}
      {path === '/frames' && <Nav />}
      {path === '/geusthouses' && <Nav />}
    </header>
  );
}

export default Header;
