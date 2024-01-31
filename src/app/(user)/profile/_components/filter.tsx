import { IoListSharp } from 'react-icons/io5';
import { SelectMonth, SelectYear } from './Select';
import { HiOutlineViewGrid } from 'react-icons/hi';

function FilterProfile() {
  return (
    <header className='flex items-center justify-between h-16 px-4 border-b shrink-0 md:px-6'>
      <h1>Landlord Name </h1>
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
