'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ProfileLink() {
  const pathname = usePathname();

  return (
    <>
      <div className='flex mt-3 gap-4 md:gap-10'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-lg'>Apartment Details</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className='text-lg font-bold'>123 Main St.</div> */}
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Status: 5 Occupied
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Status: 10 Vacant
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Total: 15
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-lg'>Rent Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Status: 3 paid
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              Status: 2 not
            </p>
          </CardContent>
        </Card>
      </div>

      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='text-lg font-medium flex items-center  md:text-sm gap-8'>
          <Link
            className={cn(
              'text-gray-500',
              pathname === '/profile' && 'font-bold text-black'
            )}
            href='/profile'>
            Apartments
          </Link>
          <Link
            className={cn(
              'text-gray-500 dark:text-gray-400',
              pathname === '/profile/tabs/tenants' && 'font-bold text-black'
            )}
            href='/profile/tabs/tenants'>
            Tenants
          </Link>
          <Link
            className={cn(
              'text-gray-500 dark:text-gray-400',
              pathname === '/profile/tabs/unpaid' && 'font-bold text-black'
            )}
            href='/profile/tabs/unpaid'>
            unpaid
          </Link>
        </nav>
      </header>
    </>
  );
}

export default ProfileLink;
