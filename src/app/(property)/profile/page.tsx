import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import ProfileLink from './_components/ProfileLink';
import {
  DollarSignIcon,
  Package2Icon,
  SearchIcon,
  UsersIcon,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Component() {
  return (
    <div className='flex flex-col h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='/profile'>
            <Package2Icon className='w-6 h-6' />
          </Link>

          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Apartments
          </Link>
          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Tenants
          </Link>
        </nav>
        <div className='flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <form className='flex-1 ml-auto sm:flex-initial'>
            <div className='relative'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
              <Input
                className='pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]'
                placeholder='Search...'
                type='search'
              />
            </div>
          </form>
          <Button className='rounded-full' size='icon' variant='ghost'>
            <img
              alt='Avatar'
              className='rounded-full'
              height='32'
              src='/images/pisi.jpg'
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width='32'
            />
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Occupied Apartments
            </CardTitle>
            <UsersIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>10</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +2 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>Rent Paid</CardTitle>
            Tsh
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2,500</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +$500 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>
              Total Apartments
            </CardTitle>
            <Package2Icon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>20</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +1 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
            <CardTitle className='text-sm font-medium'>Total Tenants</CardTitle>
            <UsersIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>15</div>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              +3 since last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <ProfileLink /> */}
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
        <div className='grid grid-cols-1 gap-6'>
          <div className='md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6'>
            <Card>
              <CardHeader>
                <CardTitle>Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='max-w-[150px]'>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>Apartment 1</TableCell>
                      <TableCell>$1200.00</TableCell>
                      <TableCell>Not</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        <Button size='icon' variant='outline'>
                          <TrashIcon className='h-4 w-4' />
                          <span className='sr-only'>Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Apartment 2</TableCell>
                      <TableCell>$1500.00</TableCell>
                      <TableCell>taken</TableCell>
                      <TableCell className='hidden md:table-cell'>
                        <Button size='icon' variant='outline'>
                          <TrashIcon className='h-4 w-4' />
                          <span className='sr-only'>Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function TrashIcon(props) {
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
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
  );
}
