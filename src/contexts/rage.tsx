import React, { ChangeEvent, useState } from 'react';

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMinPrice(value);
    }
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setMaxPrice(value);
    }
  };

  return (
    <div className='relative max-w-xl w-full'>
      <div>
        <input
          type='range'
          step='100'
          min='0'
          max='10000'
          onChange={handleMinChange}
          value={minPrice}
          className='absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
        />

        <input
          type='range'
          step='100'
          min='0'
          max='10000'
          onChange={handleMaxChange}
          value={maxPrice}
          className='absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer'
        />

        <div className='relative z-10 h-2'>
          <div className='absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200'></div>

          <div
            className='absolute z-20 top-0 bottom-0 rounded-md bg-green-300'
            style={{
              right: ((maxPrice - 0) / (10000 - 0)) * 100 + '%',
              left: ((minPrice - 0) / (10000 - 0)) * 100 + '%',
            }}></div>

          <div
            className='absolute z-30 w-6 h-6 top-0 left-0 bg-primary rounded-full -mt-2'
            style={{
              left: ((minPrice - 0) / (10000 - 0)) * 100 + '%',
            }}></div>

          <div
            className='absolute z-30 w-6 h-6 top-0 right-0 bg-primary rounded-full -mt-2'
            style={{
              right: ((maxPrice - 0) / (10000 - 0)) * 100 + '%',
            }}></div>
        </div>
      </div>

      <div className='flex items-center justify-between pt-5 space-x-4 text-sm text-gray-700'>
        <div>
          <input
            type='text'
            maxLength={5}
            onChange={handleMinChange}
            value={minPrice}
            className='w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none'
          />
        </div>
        <div>
          <input
            type='text'
            maxLength={5}
            onChange={handleMaxChange}
            value={maxPrice}
            className='w-24 px-3 py-2 text-center border border-gray-200 rounded-lg bg-gray-50 focus:border-yellow-400 focus:outline-none'
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
