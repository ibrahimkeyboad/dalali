import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrashIcon } from 'lucide-react';
import FilterProfile from '../../_components/filter';

export default function Component() {
  return (
    <>
      <FilterProfile />
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
    </>
  );
}
