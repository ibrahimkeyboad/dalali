'use client';
import React from 'react';
import Modal from './Modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IoHomeSharp } from 'react-icons/io5';
import { MdApartment } from 'react-icons/md';
import { TbBuildingCommunity } from 'react-icons/tb';
import CategoryInput from './header/CategoryInput';
import { useSelector } from 'react-redux';
import { RootState } from '@/contexts/store';

const FormSchema = z.object({
  minPrice: z.number(),
  maxPrice: z.number(),
  category: z.string(),
});

type MakeOfferFormValues = z.infer<typeof FormSchema>;

const categories = [
  {
    label: 'House',
    icon: IoHomeSharp,
  },
  {
    label: 'Apartment',
    icon: MdApartment,
  },
  {
    label: 'Hostel',
    icon: TbBuildingCommunity,
  },

  {
    label: 'Frame',
    icon: IoHomeSharp,
  },
];

type ID = 'category';

function FilterModal() {
  const isOpen = useSelector((state: RootState) => state.modalValue.modalValue);
  const form = useForm<MakeOfferFormValues>({
    resolver: zodResolver(FormSchema),
  });

  const category = form.watch('category');

  function setCustomValue(id: ID, value: any) {
    form.setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  }

  const body = (
    <Form {...form}>
      <form className='flex flex-col divide-y'>
        <div className='flex gap-6 justify-center pb-6'>
          <FormField
            control={form?.control}
            name='minPrice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum price</FormLabel>
                <FormControl>
                  <Input placeholder='minimum' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form?.control}
            name='maxPrice'
            render={({ field }) => (
              <FormItem>
                <FormLabel>max price</FormLabel>
                <FormControl>
                  <Input placeholder='maxmam' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className='py-6'>
          <h3>Property category</h3>
          <div
            className='
              grid
              grid-cols-2
              p-4
              md:grid-cols-3
              lg:grid-cols-4
              gap-3
              max-h-[50vh]
              overflow-y-auto'>
            {categories.map((item) => (
              <div key={item.label} className='col-span-1'>
                <CategoryInput
                  onClick={(value) => setCustomValue('category', value)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex gap-4 justify-center py-6'>
          <h3>Rooms</h3>
        </div>
      </form>
    </Form>
  );

  return (
    <Modal
      actionLabel='helo'
      onClose={() => {}}
      onSubmit={() => {}}
      body={body}
      title='Filter'
      isOpen={isOpen}
    />
  );
}

export default FilterModal;
