/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ouPIvD3XQ0U
 */

'use client';

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
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Apartment List
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Apartment No.</TableHead>
                    <TableHead>Tenant Name</TableHead>
                    <TableHead className='text-right'>Rent Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>A101</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell className='text-right'>$1200.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>A102</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell className='text-right'>$1300.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>A103</TableCell>
                    <TableCell>Robert Johnson</TableCell>
                    <TableCell className='text-right'>$1400.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>
                Unpaid Bills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[100px]'>Tenant Name</TableHead>
                    <TableHead>Apartment No.</TableHead>
                    <TableHead className='text-right'>
                      Outstanding Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='font-medium'>John Doe</TableCell>
                    <TableCell>A101</TableCell>
                    <TableCell className='text-right'>$1200.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className='font-medium'>Jane Smith</TableCell>
                    <TableCell>A102</TableCell>
                    <TableCell className='text-right'>$1300.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
