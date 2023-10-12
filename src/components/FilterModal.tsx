'use client';
import React, { useCallback } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/contexts/store';
import { modalToggle } from '@/contexts/globalState';
import { useRouter } from 'next/navigation';
import RoomContain from './inputs/RoomContain';

const FormSchema = z.object({
  minPrice: z.number(),
  maxPrice: z.number(),
  category: z.string(),
  location: z.string(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  bed: z.number(),
  size: z.number(),
});

type MakeOfferFormValues = z.infer<typeof FormSchema>;

const categories = [
  {
    label: 'house',
    icon: IoHomeSharp,
  },
  {
    label: 'apartment',
    icon: MdApartment,
  },
  {
    label: 'hostel',
    icon: TbBuildingCommunity,
  },

  {
    label: 'frame',
    icon: IoHomeSharp,
  },
];

type ID = 'category' | 'bed' | 'bedrooms' | 'bathrooms' | 'size';

function FilterModal() {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.modalValue.modalValue);
  const dispatch = useDispatch();
  const form = useForm<MakeOfferFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bed: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
  });

  const category = form.watch('category');
  const bed = form.watch('bed');
  const bedrooms = form.watch('bedrooms');
  const bathrooms = form.watch('bathrooms');
  const size = form.watch('size');

  console.log(category);
  console.log(category === 'apartment');

  const setCustomValue = useCallback(
    (id: ID, value: any) => {
      form.setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [form]
  );

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(
      `/search/${data.category}?bed=${data.bed}&bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}&location=${data.location}`
    );
  }

  const body = (
    <Form {...form}>
      <form
        className='flex flex-col divide-y'
        onSubmit={form.handleSubmit(onSubmit)}>
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

        {category === 'house' && (
          <div className='py-6'>
            <h3>Rooms</h3>
            <div className='flex gap-4 flex-col py-6'>
              <RoomContain
                title='Bedrooms'
                onClick={(value) => setCustomValue('bedrooms', value)}
                value={bedrooms}
              />
              <RoomContain
                title='Bathrooms'
                onClick={(value) => setCustomValue('bathrooms', value)}
                value={bathrooms}
              />
            </div>
          </div>
        )}
        {category === 'apartment' && (
          <div className=' py-6'>
            <h3>Rooms</h3>

            <div className='flex gap-4 flex-col'>
              <RoomContain
                title='Bedrooms'
                onClick={(value) => setCustomValue('bedrooms', value)}
                value={bedrooms}
              />
              <RoomContain
                title='Bathrooms'
                onClick={(value) => setCustomValue('bathrooms', value)}
                value={bathrooms}
              />
              <RoomContain
                title='Bed'
                onClick={(value) => setCustomValue('bed', value)}
                value={bed}
              />
            </div>
          </div>
        )}
        {category === 'hostel' && (
          <div className=' py-6'>
            <h3>Rooms</h3>

            <div className='flex gap-4 flex-col'>
              <RoomContain
                title='Bedrooms'
                onClick={(value) => setCustomValue('bedrooms', value)}
                value={bedrooms}
              />
              <RoomContain
                title='Bathrooms'
                onClick={(value) => setCustomValue('bathrooms', value)}
                value={bathrooms}
              />
              <RoomContain
                title='Bed'
                onClick={(value) => setCustomValue('bed', value)}
                value={bed}
              />
            </div>
          </div>
        )}

        {/* <RoomContain title='Size' /> */}
      </form>
    </Form>
  );

  return (
    <Modal
      actionLabel='helo'
      secondaryLabel='toka'
      secondaryAction={() => dispatch(modalToggle())}
      onClose={() => dispatch(modalToggle())}
      onSubmit={() => {}}
      body={body}
      title='Filter'
      isOpen={isOpen}
    />
  );
}

export default FilterModal;
