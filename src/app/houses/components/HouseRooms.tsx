import Card from '@/components/posts/Card';
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
        <article className='border p-4 rounded-md flex gap-3'>
          {/* <IoIosBed size={25} /> */}
          <p>
            {bedrooms} bedroom{bedrooms > 1 ? 's' : null}
          </p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          <MdOutlineBathroom size={25} />
          <p>
            {bath.length} bath{bath.length > 1 ? 's' : null}
          </p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Kitchen</p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>seatrooms</p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>dinner</p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          {/* <MdOutlineBathroom size={25} /> */}
          <p>Place to work or start</p>
        </article>
      </div>
    </Card>
  );
}

export default HouseRooms;
