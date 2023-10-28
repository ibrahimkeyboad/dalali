'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface Props {
  title: string;
  desc: string;
}

export function CheckboxWithText({ desc, title }: Props) {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox id={title} />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={title}
          className='text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          {title}
        </label>
        <p className='text-sm text-muted-foreground'>{desc}</p>
      </div>
    </div>
  );
}
