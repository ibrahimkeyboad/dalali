'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Prop {
  title: string;
  data: any;
  onChange: (value: string) => void;
}

export function ComboboxDemo({ title, data = [], onChange }: Prop) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'>
          {value
            ? data.find((item: any) => item.name.value === value)?.name.label
            : `Select ${title}...`}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command className='max-h-96'>
          <CommandInput placeholder='Search city...' />
          <CommandEmpty>No {title} found.</CommandEmpty>
          <CommandGroup className='overflow-y-auto'>
            {data?.map((item: any) => (
              <CommandItem
                key={item.name.value}
                value={item.name.value}
                onSelect={(currentValue) => {
                  onChange(currentValue);
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}>
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === item.name.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.name.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
