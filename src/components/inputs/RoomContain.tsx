import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  title: string;
  value?: number;

  selected?: boolean;
  onClick: (value: number) => void;
}

const data = [0, 1, 2, 3, 4, 5, 6];

function RoomContain({ title, onClick, value }: Props) {
  return (
    <div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <div className=' flex  gap-2 py-2 md:gap-8 md:py-4 flex-wrap'>
        {data.map((item) => (
          <button
            key={item}
            type='button'
            onClick={() => onClick(item)}
            className={cn(
              'px-4 text-center text-base py-2 border-slate-400 hover:border-primary border-2 rounded-2xl',
              item === value
                ? 'bg-primary text-primary-foreground border-primary'
                : ''
            )}>
            {item === 0 ? 'Yoyote' : item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomContain;
