import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { IoIosBed } from 'react-icons/io';
import { MdOutlineBathroom } from 'react-icons/md';

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
        What is house contain
      </h2>
      <div className='flex  w-2/3 gap-4 p-4 flex-wrap'>
        <CardContent className='border rounded-md '>
          <h3 className='text-center'>Bedroom</h3>

          <article className='flex gap-3'>
            <IoIosBed size={25} />
            <p>Master bedroom</p>
          </article>
          <article className='flex gap-3'>
            <IoIosBed size={25} />
            <p>single bedroom</p>
          </article>
        </CardContent>

        <CardContent className='border rounded-md '>
          <h3 className='text-center'>Bathroom</h3>

          <article className='flex gap-3'>
            <MdOutlineBathroom size={25} />
            <p>Public bathromm</p>
          </article>
          <article className='flex gap-3'>
            <MdOutlineBathroom size={25} />
            <p>prive bathroom</p>
          </article>
        </CardContent>
        <CardContent className='border rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Kitchen</p>
        </CardContent>
        <CardContent className='border rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>setting room</p>
        </CardContent>
        <CardContent className='border rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>dinning</p>
        </CardContent>
        <CardContent className='border rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Place to work or start</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default HouseRooms;
