/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YHOfFo2TsMh
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

export default function Component() {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6'>
          <Link
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
            href='#'>
            <span className='sr-only'>Landlord Dashboard</span>
          </Link>
          <Link className='font-bold' href='#'>
            Apartments
          </Link>
          <Link className='text-gray-500 dark:text-gray-400' href='#'>
            Unpaid Bills
          </Link>
        </nav>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Apartment 1</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-lg font-bold'>123 Main St.</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Status: Occupied
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Apartment 2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-lg font-bold'>456 Oak St.</div>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                Status: Vacant
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Tenant</TableHead>
                  <TableHead>Apartment</TableHead>
                  <TableHead className='text-right'>
                    Outstanding Payment
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>John Doe</TableCell>
                  <TableCell>Apartment 1</TableCell>
                  <TableCell className='text-right'>$500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Jane Smith</TableCell>
                  <TableCell>Apartment 3</TableCell>
                  <TableCell className='text-right'>$750.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
