import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectMonth() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a month' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Month</SelectLabel>
          <SelectItem className='cursor-pointer' value='january'>
            January
          </SelectItem>
          <SelectItem className='cursor-pointer' value='february'>
            February
          </SelectItem>
          <SelectItem className='cursor-pointer' value='march'>
            March
          </SelectItem>
          <SelectItem className='cursor-pointer' value='april'>
            April
          </SelectItem>
          <SelectItem className='cursor-pointer' value='may'>
            May
          </SelectItem>
          <SelectItem className='cursor-pointer' value='june'>
            June
          </SelectItem>
          <SelectItem className='cursor-pointer' value='july'>
            July
          </SelectItem>
          <SelectItem className='cursor-pointer' value='August'>
            August
          </SelectItem>
          <SelectItem className='cursor-pointer' value='Sptember'>
            September
          </SelectItem>
          <SelectItem className='cursor-pointer' value='october'>
            October
          </SelectItem>
          <SelectItem className='cursor-pointer' value='november'>
            November
          </SelectItem>
          <SelectItem className='cursor-pointer' value='december'>
            December
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export function SelectYear() {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a Year' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Year</SelectLabel>
          <SelectItem value='2024'>2024</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
