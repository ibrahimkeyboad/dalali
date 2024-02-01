'use client';

import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { usePathname } from 'next/navigation';
import { PiFadersHorizontalFill } from 'react-icons/pi';
import { useCallback } from 'react';
import { modalToggle } from '@/contexts/globalState';
import dynamic from 'next/dynamic';
import { Button } from '../ui/button';
import NavSkeleton from './NavSkeleton';
import { Skeleton } from '../ui/skeleton';
import { BiWorld } from 'react-icons/bi';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

const Nav = dynamic(() => import('./Nav'), {
  loading: () => <NavSkeleton />,
});
const UserAvatar = dynamic(() => import('../UserAvatar'), {
  loading: () => <Skeleton className='h-10 w-10 rounded-full' />,
});

const ModeToggle = dynamic(() => import('./Theme'), {
  loading: () => <Skeleton className='h-12 w-12 rounded-md' />,
});

function Header() {
  const data: any = {};
  const path = usePathname();

  const dispatch = useDispatch();

  const handlerToggle = useCallback(() => {
    dispatch(modalToggle());
  }, [dispatch]);

  return (
    <>
      <header className='px-5 py-3 max-w-[1240px] bg0 m-auto flex flex-col'>
        <nav className='flex py-3 justify-between pb-2 items-center flex-wrap place-content-around md:px-9'>
          <Link
            className={cn('text-2xl text-[#034047]', merriweather.className)}
            href='/'>
            Dalali
          </Link>

          <nav className='flex items-center gap-3'>
            <ul className='flex gap-4 text-sm capitalize font-medium'>
              <li className='py-1 px-2'>
                <Link href='/emergency'>Dharura</Link>
              </li>
              <li className='py-1 px-2'>
                <Link href='/support'>Msaada</Link>
              </li>
              <li className='py-1 px-2'>
                <Link href='/user/wishlist'>Mapendeleo</Link>
              </li>
            </ul>
            <Button
              className='rounded-lg border'
              variant='ghost'
              type='button'
              onClick={handlerToggle}>
              <PiFadersHorizontalFill size={20} />
            </Button>
            <Button
              className='rounded-lg border flex items-center gap-1 justify-center'
              variant='ghost'
              type='button'
              onClick={handlerToggle}>
              <BiWorld size={20} />
              <span>Swahili</span>
            </Button>

            {/* <ModeToggle /> */}
            {data ? (
              <Link href='/profile'>
                <UserAvatar />
              </Link>
            ) : (
              <div className='flex gap-4 items-center'>
                <Link className='px-3 py-1' href='/login'>
                  Login
                </Link>
                <Link
                  className='border-gray-800 border-2 text-gray-800 px-3 py-2 rounded-lg'
                  href='/signup'>
                  Get Start
                </Link>
              </div>
            )}
          </nav>
        </nav>
      </header>

      {path === '/' && <Nav />}
      {path === '/apartments' && <Nav />}
      {path === '/houses' && <Nav />}
      {path === '/hostels' && <Nav />}
      {path === '/lodges' && <Nav />}
      {path === '/frames' && <Nav />}
      {path === '/geusthouses' && <Nav />}
      {path === '/nhc' && <Nav />}
    </>
  );
}

export default Header;
