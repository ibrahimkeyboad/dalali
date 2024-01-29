/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mOylwXPFNVN
 */
import Link from 'next/link';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import {
  BuildingIcon,
  DollarSignIcon,
  HomeIcon,
  UsersIcon,
} from 'lucide-react';

export default function Component() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='#'>
            <HomeIcon className='w-6 h-6' />
            <span className='sr-only'>Landlord Dashboard</span>
          </Link>
          <Link className='font-bold' href='#'>
            Apartments
          </Link>
          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Tenants
          </Link>
          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Payments
          </Link>
        </nav>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Apartments Occupied
              </CardTitle>
              <HomeIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>35</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +2 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Apartments with Rent Payment
              </CardTitle>
              <DollarSignIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>30</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +1 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Total Apartments
              </CardTitle>
              <BuildingIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>50</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +0 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Total Tenants
              </CardTitle>
              <UsersIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>40</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                +3 since last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-6 lg:grid-cols-2'>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='divide-y'>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>Apartment 1</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      2BHK, Occupied
                    </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>Apartment 2</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      3BHK, Vacant
                    </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>Apartment 3</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      1BHK, Occupied
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tenants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='divide-y'>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>John Doe</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Rent Paid
                    </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>Jane Doe</h3>
                    <p className='text-xs text-red-500 dark:text-red-400'>
                      Rent Pending
                    </p>
                  </div>
                  <div className='py-2'>
                    <h3 className='text-sm font-medium'>Sam Smith</h3>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>
                      Rent Paid
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
