/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Vq4Rrvr3HPY
 */
import Link from 'next/link';
import { Input } from '@/components/ui/input';
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
import {
  DollarSignIcon,
  Package2Icon,
  SearchIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function Component() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='#'>
            <Package2Icon className='w-6 h-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
          <Link className='font-bold' href='#'>
            Dashboard
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
            <Image
              priority
              alt='Avatar'
              className='rounded-full'
              height={32}
              src='/placeholder.svg'
              style={{
                aspectRatio: '32/32',
                objectFit: 'cover',
              }}
              width={32}
            />
            <span className='sr-only'>Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
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
              <DollarSignIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>$2,500</div>
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
              <CardTitle className='text-sm font-medium'>
                Total Tenants
              </CardTitle>
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
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Apartment</TableHead>
                  <TableHead>Tenant</TableHead>
                  <TableHead>Rent Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>Apt 1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Apt 2</TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>Unpaid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Apt 3</TableCell>
                  <TableCell>Bob Smith</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Apt 4</TableCell>
                  <TableCell>Jill Johnson</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Apt 5</TableCell>
                  <TableCell>Bill Williams</TableCell>
                  <TableCell>Unpaid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Tenant</TableHead>
                  <TableHead>Rent Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>John Doe</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jane Doe</TableCell>
                  <TableCell>Unpaid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Bob Smith</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jill Johnson</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Bill Williams</TableCell>
                  <TableCell>Unpaid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
