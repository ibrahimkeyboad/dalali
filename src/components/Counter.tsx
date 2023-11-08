'use client';

import { useCallback } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  price?: boolean;
  onChange: (value: number) => void;
}
function Counter({ onChange, subtitle, title, value, price }: CounterProps) {
  const onAdd = useCallback(() => {
    if (price) {
      onChange(value + 5000);
      if (value >= 100000) {
        onChange(value + 10000);
      }
    } else {
      onChange(value + 1);
    }
  }, [onChange, price, value]);

  function priceString() {
    if (value >= 20000 && value < 100000) return `Elf ${value / 1000}`;
    if (value >= 100000 && value < 1000000) return `Laki ${value / 100000}`;
  }

  const onReduce = useCallback(() => {
    if (price) {
      onChange(value - 5000);
      if (value >= 100000) {
        onChange(value - 10000);
      }
    } else {
      if (value === 1) {
        return;
      }

      onChange(value - 1);
    }
  }, [value, onChange, price]);
  return (
    <div className='flex items-center gap-4'>
      <div className='flex flex-col'>
        <h3 className='font-medium text-gray-300'>{title}</h3>
        <h4 className='font-light text-gray-400'>{subtitle}</h4>
      </div>
      <div className='flex items-center gap-2'>
        <button
          type='button'
          onClick={onReduce}
          className='
          p-1
        rounded-full 
        border-2
        border-primary
        flex
        items-center
        justify-center
        cursor-pointer
        hover:opacity-80
        transition'>
          <AiOutlineMinus className='text-primary' />
        </button>
        <span className='font-medium text-xl text-primary'>
          {/* {price && value} */}
          {price && priceString()}
        </span>
        <button
          onClick={onAdd}
          type='button'
          className=' 
            p-1
            rounded-full 
            border-2
            border-primary
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition'>
          <AiOutlinePlus className='text-primary' />
        </button>
      </div>
    </div>
  );
}

export default Counter;
