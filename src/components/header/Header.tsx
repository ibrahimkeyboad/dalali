'use client';

import Link from 'next/link';
import Image from 'next/image';

import Searching from './Searching';
import UserAvatar from '../UserAvatar';
import Nav from './Nav';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './Theme';
import { SelectForm } from './search';
import { PiFadersHorizontalFill } from 'react-icons/pi';
import { Button } from '../ui/button';
import { IoIosSearch } from 'react-icons/io';
import { useState } from 'react';

function Header() {
  const data: any = {};
  const path = usePathname();

  const [toggle, setToggle] = useState();

  return (
    <header className='px-5 py-6 m-auto flex flex-col divide-y'>
      <nav className='flex justify-between pb-6 items-center flex-wrap place-content-around md:px-9'>
        <Link className={`font-bold text-2xl dark:text-[#CCD6F6] `} href='/'>
          Dalali
        </Link>

        <SelectForm />

        <nav className='flex items-center gap-3'>
          <Button className='lg:hidden' variant='outline' size='icon'>
            <IoIosSearch size={25} />
          </Button>
          <Button variant='outline'>
            <PiFadersHorizontalFill size={20} />
          </Button>

          <ModeToggle />
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
