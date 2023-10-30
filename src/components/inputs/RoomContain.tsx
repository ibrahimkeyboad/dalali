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
            onClick={() => onClick(item)}
            className={`px-5 text-lg py-2 rounded-2xl ${
              item === value
                ? 'bg-primary text-primary-foreground border-primary-foreground'
                : ''
            } border-slate-400 hover:border-primary border-2`}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomContain;
