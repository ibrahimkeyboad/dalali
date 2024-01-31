import Link from 'next/link';
import { Button } from '@/components/ui/button';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card';

import { Package2Icon, TrashIcon, UsersIcon } from 'lucide-react';
import { IoHomeOutline } from 'react-icons/io5';

export default function Component() {
  return (
    <main className='flex p-4 gap-5 flex-wrap flex-col'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>
            {/* Occupied Apartments or  */}
            Vyumba vilivyo chukuliwa
          </CardTitle>
          <IoHomeOutline className='w-4 h-4 text-gray-500 dark:text-gray-400' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>10</div>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            +2 since last month, this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium'>
            Ambao hawajalipa kodi
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>5</div>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            since last month
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
          {/* <p className='text-xs text-gray-500 dark:text-gray-400'>
              +1 since last month
            </p> */}
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
    </main>
  );
}
