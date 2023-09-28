import React, { FormEvent, useCallback } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useRouter, useSearchParams } from 'next/navigation';

function Searching() {
  const search = useSearchParams();

  const onSubmitHandler = useCallback((value: FormEvent<HTMLElement>) => {
    //  query.location = value.location;
    // push({ pathname: '/search', query });
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex-shrink-0  flex-grow-0 order-1 overflow-hidden flex justify-between border-2  bg-[#0e254a]  border-gray-400 items-center lg:m-0 mt-4 md:basis-3/5 lg:basis-[50%] md:order-none basis-full rounded-full'>
      <input
        type='text'
        className={`py-2 px-5 bg-transparent basis-[90%] border-transparent rounded-tl-full rounded-bl-full outline-none`}
        placeholder='Search...'
      />
      <button
        type='submit'
        className='text-white py-2 bg-[#0a192f] px-5 basis-[8%] dark:hover:bg-[#d9dfe8] dark:hover:text-[#0a192f] transition-colors duration-200'>
        <HiSearch size={25} />
      </button>
    </form>
  );
}

export default Searching;
