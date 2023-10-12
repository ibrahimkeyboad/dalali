import React from 'react';

interface Props {
  title: string;
  value?: number;

  selected?: boolean;
  onClick: (value: number) => void;
}

const data = [1, 2, 3, 4, 5, 6];

function RoomContain({ title, onClick, value }: Props) {
  return (
    <div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <div className=' flex gap-8 py-4'>
        {data.map((item) => (
          <button
            key={item}
            type='button'
            onClick={(event) => {
              event.stopPropagation();
              onClick(item);
            }}
            className={`px-6 text-lg py-2 rounded-2xl ${
              item === value ? 'bg-white text-black border-white' : ''
            } border-slate-500 hover:border-slate-50 border-2`}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomContain;
