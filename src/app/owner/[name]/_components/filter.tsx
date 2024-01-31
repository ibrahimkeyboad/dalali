import { IoListSharp } from 'react-icons/io5';
import { SelectMonth, SelectYear } from './Select';
import { HiOutlineViewGrid } from 'react-icons/hi';

function FilterProfile() {
  return (
    <header className='flex items-center py-10 justify-between px-4 shrink-0 md:px-6'>
      <h1 className='text-3xl font-bold text-[#2A2D34]'>Zanury Issa </h1>
      <div className='flex items-center gap-2'>
        <HiOutlineViewGrid size={20} />
        <IoListSharp size={20} />
        <SelectMonth />
        <SelectYear />
      </div>
    </header>
  );
}

export default FilterProfile;
