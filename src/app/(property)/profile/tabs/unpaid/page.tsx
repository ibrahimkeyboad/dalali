import React from 'react';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import ProfileLink from '../../_components/ProfileLink';
import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';

function UnpaidPage() {
  return (
    <div>
      <ProfileLink />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='max-w-[150px]'>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone number</TableHead>
            <TableHead>Apartment name</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>John Doe</TableCell>
            <TableCell>johndoe@eaxmple.com</TableCell>
            <TableCell>+984525225</TableCell>
            <TableCell>2 Bedroom Apartment</TableCell>
            <TableCell className='hidden md:table-cell'>
              <Button size='icon' variant='outline'>
                <Trash2Icon className='h-4 w-4' />
                <span className='sr-only'>Delete</span>
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className='font-medium'>Zahara Ibrahim</TableCell>
            <TableCell>zahara@eample.com</TableCell>
            <TableCell>+38985353</TableCell>
            <TableCell>3 Bedroom Apartment</TableCell>
            <TableCell className='hidden md:table-cell'>
              <Button size='icon' variant='outline'>
                <Trash2Icon className='h-4 w-4' />
                <span className='sr-only'>Delete</span>
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default UnpaidPage;
