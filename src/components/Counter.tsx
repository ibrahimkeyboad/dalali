'use client';

import { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}
function Counter({ onChange, subtitle, title, value }: CounterProps) {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [value, onChange]);
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col'>
        <h3 className='font-medium text-gray-300'>{title}</h3>
        <h4 className='font-light text-gray-400'>{subtitle}</h4>
      </div>
      <div className='flex items-center gap-4 text-gray-50'>
        <button
          type='button'
          onClick={onReduce}
          className='
        w-10 
        h-10 
        rounded-full 
        border-[1px] 
        border-neutral-400
        flex
        items-center
        justify-center
        cursor-pointer
        hover:opacity-80
        transition'>
          <AiOutlineMinus />
        </button>
        <span className='font-light text-xl text-primary'>{value}</span>
        <button
          onClick={onAdd}
          type='button'
          className='
            w-10 
            h-10 
            rounded-full 
            border-[1px] 
            border-neutral-400
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition'>
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default Counter;
