import React from 'react';
import Card from './Card';
import { IoIosBed } from 'react-icons/io';
import { MdBathroom, MdOutlineBathroom } from 'react-icons/md';

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

const bath = [
  {
    type: 'luxury',
    water: 'hote',
  },
];

function RoomContaine() {
  return (
    <Card>
      <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
        What is room contain
      </h2>
      <div className='flex gap-3 p-3 '>
        <article className='border p-4 rounded-md flex gap-3'>
          <IoIosBed size={25} />
          <p>
            {bed.length} bed{bed.length > 1 ? 's' : null}
          </p>
        </article>
        <article className='border p-4 rounded-md flex gap-3'>
          <MdOutlineBathroom size={25} />
          <p>
            {bath.length} bath{bath.length > 1 ? 's' : null}
          </p>
        </article>
      </div>
    </Card>
  );
}

export default RoomContaine;
