'use client';

import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { usePathname } from 'next/navigation';
import { PiFadersHorizontalFill } from 'react-icons/pi';
import { useCallback } from 'react';
import { modalToggle } from '@/contexts/globalState';
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';

const Nav = dynamic(() => import('./Nav'), {
  loading: () => <p>Loading...</p>,
});
const UserAvatar = dynamic(() => import('../UserAvatar'), {
  loading: () => <p>Loading...</p>,
});

const ModeToggle = dynamic(() => import('./Theme'), {
  loading: () => <p>Loading...</p>,
});

function Header() {
  const data: any = {};
  const path = usePathname();

  const dispatch = useDispatch();

  const handlerToggle = useCallback(() => {
    dispatch(modalToggle());
  }, [dispatch]);

  return (
    <header className='px-5 py-6 m-auto flex flex-col divide-y'>
      <nav className='flex justify-between pb-6 items-center flex-wrap place-content-around md:px-9'>
        <Link className={`font-bold text-2xl dark:text-[#CCD6F6] `} href='/'>
          Dalali
        </Link>

        {/* <SelectForm /> */}

        <nav className='flex items-center gap-3'>
          {/* <Button className='lg:hidden' variant='outline' size='icon'>
            <IoIosSearch size={25} />
          </Button> */}
          <Button variant='outline' type='button' onClick={handlerToggle}>
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
