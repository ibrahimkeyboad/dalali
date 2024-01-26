/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hck8TCLgDo1
 */
import Link from 'next/link';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

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
        </nav>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Occupied Apartments
              </CardTitle>
              <HomeIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>15</div>
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
              <div className='text-2xl font-bold'>10</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Total Apartments
              </CardTitle>
              <HomeIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>20</div>
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
              <div className='text-2xl font-bold'>25</div>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-medium'>
                  Apartments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='apartment-1' />
                  <Label htmlFor='apartment-1'>Apartment 1</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='apartment-2' />
                  <Label htmlFor='apartment-2'>Apartment 2</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='apartment-3' />
                  <Label htmlFor='apartment-3'>Apartment 3</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='apartment-4' />
                  <Label htmlFor='apartment-4'>Apartment 4</Label>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg font-medium'>Tenants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='tenant-1' />
                  <Label htmlFor='tenant-1'>Tenant 1</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='tenant-2' />
                  <Label htmlFor='tenant-2'>Tenant 2</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='tenant-3' />
                  <Label htmlFor='tenant-3'>Tenant 3</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <Checkbox id='tenant-4' />
                  <Label htmlFor='tenant-4'>Tenant 4</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  );
}
