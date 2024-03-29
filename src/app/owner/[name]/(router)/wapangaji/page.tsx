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
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { TrashIcon } from 'lucide-react';
import FilterProfile from '../../_components/filter';
import UserAvatar from '@/components/UserAvatar';

function Tenants() {
  return (
    <>
      <header className='flex justify-end py-3 px-5 bg-white'>
        <UserAvatar />
      </header>
      <FilterProfile />
      <main className='mx-6'>
        <h3 className='text-lg font-bold mb-5'>Wapangaji ulio wapangishia</h3>
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='max-w-[150px]'>Jina Kamili</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Simu</TableHead>
                  <TableHead>Chumba</TableHead>
                  <TableHead>Jina la Apartment</TableHead>
                  <TableHead>Rent</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>John Doe</TableCell>
                  <TableCell>johndoe@eaxmple.com</TableCell>
                  <TableCell>+984525225</TableCell>
                  <TableCell>2 Bedroom Apartment</TableCell>
                  <TableCell>Victoria Place</TableCell>
                  <TableCell>Not</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    <Button size='icon' variant='outline'>
                      <TrashIcon className='h-4 w-4' />
                      <span className='sr-only'>Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>Zahara Ibrahim</TableCell>
                  <TableCell>zahara@eample.com</TableCell>
                  <TableCell>+38985353</TableCell>
                  <TableCell>3 Bedroom Apartment</TableCell>
                  <TableCell>Victoria Place</TableCell>
                  <TableCell>Not</TableCell>
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
      </main>
    </>
  );
}

export default Tenants;
