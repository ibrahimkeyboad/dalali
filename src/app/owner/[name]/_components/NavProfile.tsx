'use client';

import { cn } from '@/lib/utils';
import { CogIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiUserGroup } from 'react-icons/hi';
import { IoHomeOutline, IoPeopleSharp } from 'react-icons/io5';

function NavProfile() {
  const pathName = usePathname();
  return (
    <header className='hidden border-r bg-gray-100/40 md:block w-[300px] dark:bg-gray-800/40'>
      <div className='flex flex-col py-4 gap-2'>
        <div className='flex-1'>
          <nav className='grid items-start px-4 text-sm font-medium'>
            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900  transition-all hover:text-gray-900  dark:text-gray-50 dark:hover:text-gray-50',
                pathName === '/profile' &&
                  'bg-gray-200 dark:text-gray-50 text-gray-900 dark:bg-gray-800'
              )}
              href='/owner/nhc'>
              <UserIcon className='h-6 w-6' />
              Dashboard
            </Link>
            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                pathName === '/owner/nhc/vyumba' &&
                  'bg-gray-200 dark:text-gray-50 text-gray-900 dark:bg-gray-800'
              )}
              href='/owner/nhc/vyumba'>
              <IoHomeOutline className='h-6 w-6' />
              Vyumba
            </Link>
            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                pathName === '/owner/nhc/wapangaji' &&
                  'bg-gray-200 dark:text-gray-50 text-gray-900 dark:bg-gray-800'
              )}
              href='/owner/nhc/wapangaji'>
              <IoPeopleSharp className='h-6 w-6' />
              Wapamgaji
            </Link>
            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                pathName === '/owner/nhc/weka' &&
                  'bg-gray-200 dark:text-gray-50 text-gray-900 dark:bg-gray-800'
              )}
              href='/owner/nhc/weka'>
              <HiUserGroup className='h-6 w-6' />
              Ongeza chumba
            </Link>

            <Link
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
                pathName === '/owner/nhc/settings' &&
                  'bg-gray-200 dark:text-gray-50 text-gray-900 dark:bg-gray-800'
              )}
              href='/owner/nhc/settings'>
              <CogIcon className='h-6 w-6' />
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavProfile;
