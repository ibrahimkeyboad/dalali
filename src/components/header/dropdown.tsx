'use client';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Counter from '../Counter';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

type ID = 'bedrooms' | 'bathrooms' | 'beds' | 'sofa' | 'imageCover' | 'images';

interface Props {
  bedrooms: number;
  beds: number;
  bathrooms: number;
  onHandlerBedRoom: (value: number) => void;
  onHandlerBathRoom: (value: number) => void;
}

export function DropdownMenuProperty({
  bathrooms,
  bedrooms,
  onHandlerBathRoom,
  beds,
  onHandlerBedRoom,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline'>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-96 px-3'>
        <DropdownMenuItem>
          <DropdownMenuLabel>Rooms</DropdownMenuLabel>
          <Counter
            onChange={onHandlerBedRoom}
            value={bedrooms}
            title='beds'
            subtitle='How many bedrooms do you want?'
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
