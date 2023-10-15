import React, { useState } from 'react';

function RangeSlider() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const min = 0;
  const max = 10000;

  const minThumb = ((minPrice - min) / (max - min)) * 100;
  const maxThumb = 100 - ((maxPrice - min) / (max - min)) * 100;

  /*  @ts-ignore */

  const handleMinPriceChange = (e) => {
    let value = Number(e.target.value);
    if (value < maxPrice) {
      setMinPrice(value);
    }
  };

  /*  @ts-ignore */

  const handleMaxPriceChange = (e) => {
    let value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className='relative max-w-xl w-full'>
      <div>
        <input
          type='range'
          step='100'
          min={min}
          max={max}
          onChange={handleMinPriceChange}
          value={minPrice}
          className='absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
        />
        <input
          type='range'
          step='100'
          min={min}
          max={max}
          onChange={handleMaxPriceChange}
          value={maxPrice}
          className='absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
        />
        <div className='relative z-10 h-2'>
          <div className='absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200'></div>
          <div
            className='absolute z-20 top-0 bottom-0 rounded-md bg-green-300'
            style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}></div>
          <div
            className='absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2'
            style={{ left: `${minThumb}%` }}></div>
          <div
            className='absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2'
            style={{ right: `${maxThumb}%` }}></div>
        </div>
      </div>
      <div className='flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700'>
        <span>{minPrice}</span>
        <span>{maxPrice}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
