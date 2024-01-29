/**
 * v0 by Vercel.
 * @see https://v0.dev/t/d8JxpFsgZ8X
 */
import Link from 'next/link';
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
              <div className='text-2xl font-bold'>35</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Apartments with Rent Payments
              </CardTitle>
              <DollarSignIcon className='w-4 h-4 text-gray-500 dark:text-gray-400' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>30</div>
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
              <div className='text-2xl font-bold'>60</div>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Apartments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-[100px]'>Apartment No.</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Rent</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>Apt 101</TableCell>
                      <TableCell>Occupied</TableCell>
                      <TableCell>$1500.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Apt 102</TableCell>
                      <TableCell>Vacant</TableCell>
                      <TableCell>$1500.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Apt 103</TableCell>
                      <TableCell>Occupied</TableCell>
                      <TableCell>$1500.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Apt 104</TableCell>
                      <TableCell>Vacant</TableCell>
                      <TableCell>$1500.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Tenants</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-[100px]'>Tenant Name</TableHead>
                      <TableHead>Apartment No.</TableHead>
                      <TableHead>Rent Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className='font-medium'>John Doe</TableCell>
                      <TableCell>Apt 101</TableCell>
                      <TableCell>Paid</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Jane Doe</TableCell>
                      <TableCell>Apt 103</TableCell>
                      <TableCell>Unpaid</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Jim Doe</TableCell>
                      <TableCell>Apt 105</TableCell>
                      <TableCell>Paid</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className='font-medium'>Jill Doe</TableCell>
                      <TableCell>Apt 107</TableCell>
                      <TableCell>Unpaid</TableCell>
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
