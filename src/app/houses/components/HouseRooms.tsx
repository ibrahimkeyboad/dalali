import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { IoIosBed } from 'react-icons/io';
import { MdOutlineBathroom } from 'react-icons/md';

const bed = [
  {
    type: 'luxury',
    size: '6*6',
  },
  {
    type: 'medium',
    size: '4*4',
  },
];

const bedrooms = 2;

const bath = [
  {
    type: 'luxury',
    water: 'hote',
  },
];

function HouseRooms() {
  return (
    <Card>
      <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
        What is room contain
      </h2>
      <div className='flex gap-4 p-4 flex-wrap'>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          {/* <IoIosBed size={25} /> */}
          <p>
            {bedrooms} bedroom{bedrooms > 1 ? 's' : null}
          </p>
        </CardContent>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          <MdOutlineBathroom size={25} />
          <p>
            {bath.length} bath{bath.length > 1 ? 's' : null}
          </p>
        </CardContent>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Kitchen</p>
        </CardContent>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>seatrooms</p>
        </CardContent>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>dinner</p>
        </CardContent>
        <CardContent className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Place to work or start</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default HouseRooms;