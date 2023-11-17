'use client';
import React, { useCallback } from 'react';
import Modal from './Modal';
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
import Counter from './Counter';
import CategoryType from './CategoryType';
import LocationComponent from './LocationComponent';

const FormSchema = z.object({
  minPrice: z.number(),
  maxPrice: z.number(),
  category: z.string(),
  categoryType: z.string(),
  street: z.string(),
  city: z.string(),
  country: z.string(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  bed: z.number(),
  // size: z.number(),
});

type MakeOfferFormValues = z.infer<typeof FormSchema>;

const categories = [
  {
    label: 'houses',
    icon: IoHomeSharp,
  },
  {
    label: 'apartments',
    icon: MdApartment,
  },
  {
    label: 'hostels',
    icon: TbBuildingCommunity,
  },

  {
    label: 'frames',
    icon: IoHomeSharp,
  },
];

type ID =
  | 'category'
  | 'bed'
  | 'bedrooms'
  | 'bathrooms'
  | 'minPrice'
  | 'maxPrice'
  | 'categoryType';

function FilterModal() {
  const router = useRouter();
  const isOpen = useSelector((state: RootState) => state.modalValue.modalValue);
  const dispatch = useDispatch();
  const form = useForm<MakeOfferFormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bed: 0,
      bedrooms: 0,
      bathrooms: 0,
      minPrice: 30000,
      maxPrice: 100000,
    },
  });

  const category = form.watch('category');
  const bed = form.watch('bed');
  const bedrooms = form.watch('bedrooms');
  const bathrooms = form.watch('bathrooms');
  const minPrice = form.watch('minPrice');
  const maxPrice = form.watch('maxPrice');
  const categoryType = form.watch('categoryType');
  // const size = form.watch('size');


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
      // `${data.category}?bed=${data.bed}&bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}&location=${data.location}`
      `${data.category}?bed=${data.bed}&bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}`
    );
    if (!bed) {
      router.push(
        `${data.category}?bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}`
      );
    }
  }

  const body = (
    <div className='flex flex-col divide-y'>
      <div className='flex gap-4 flex-wrap py-5'>
        <LocationComponent />
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

      {category === 'houses' && (
        <CategoryType
          onHandlerClick={(value) => setCustomValue('categoryType', value)}
          value={categoryType}
        />
      )}

      {category === 'houses' && categoryType === 'self' && (
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
      {category === 'apartments' && (
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

      {category === 'hostels' && (
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

      <div className='flex flex-col gap-6  py-6'>
        <Counter
          title='Min price'
          onChange={(value) => setCustomValue('minPrice', value)}
          subtitle='what price will start'
          value={minPrice}
          price
        />
        <Counter
          title='Max price'
          onChange={(value) => setCustomValue('maxPrice', value)}
          subtitle='what price will end at'
          value={maxPrice}
          price
        />
      </div>

      {/* <RoomContain title='Size' /> */}
    </div>
  );

  return (
    <Modal
      actionLabel='Search'
      secondaryLabel='toka'
      secondaryAction={() => dispatch(modalToggle())}
      onClose={() => dispatch(modalToggle())}
      body={body}
      onSubmit={form.handleSubmit(onSubmit)}
      title='Filter'
      isOpen={isOpen}
    />
  );
}

export default FilterModal;
