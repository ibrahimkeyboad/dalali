'use client';

import Counter from '../Counter';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { useCallback, useState } from 'react';

interface Props {
  bedrooms: number;
  beds: number;
  bathrooms: number;
  onHandlerBedRoom: (value: number) => void;
  onHandlerBathRoom: (value: number) => void;
  onHandlerBed: (value: number) => void;
}

export function DropdownMenuProperty({
  bathrooms,
  bedrooms,
  onHandlerBathRoom,
  beds,
  onHandlerBedRoom,
  onHandlerBed,
}: Props) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div>
      <div
        className='cursor-pointer flex divide-x-2 border rounded-sm scale-90 hover:scale-95'
        onClick={toggleHandler}>
        <span className='py-2 px-3'>{bedrooms} bedroooms</span>
        <span className='py-2 px-3'>{bathrooms} barthroom</span>
        <span className='py-2 px-3'>{beds} bed</span>
      </div>
      {toggle && (
        <Card className='absolute -bottom-8013=  border z-30 right-0 pt-3'>
          <CardContent>
            <Counter
              onChange={onHandlerBedRoom}
              value={bedrooms}
              title='bedroom'
              subtitle='How many bedrooms?'
            />
          </CardContent>
          <CardContent>
            <Counter
              onChange={onHandlerBedRoom}
              value={bedrooms}
              title='bedroom'
              subtitle='How many bedrooms?'
            />
          </CardContent>
          <CardContent>
            <Counter
              onChange={onHandlerBed}
              value={beds}
              title='bedroom'
              subtitle='How many bedrooms?'
            />
          </CardContent>

          <CardFooter>
            <Button variant='outline' type='button' onClick={toggleHandler}>
              Done
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
