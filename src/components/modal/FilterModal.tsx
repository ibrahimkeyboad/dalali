'use client';
import React, { useCallback } from 'react';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/contexts/store';
import { modalToggle } from '@/contexts/globalState';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { formatPrice } from '@/utils/formatPrice';

const CategoryType = dynamic(() => import('../inputs/CategoryType'), {
  loading: () => <p>Loading...</p>,
});

const RoomContain = dynamic(() => import('../inputs/RoomContain'), {
  loading: () => <p>Loading...</p>,
});
const CategoryInput = dynamic(() => import('../header/CategoryInput'), {
  loading: () => <p>Loading...</p>,
});

const FormSchema = z.object({
  minPrice: z.number(),
  maxPrice: z.number(),
  category: z.string(),
  categoryType: z.string(),
  street: z.string(),
  city: z.string(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  bed: z.number(),
  // size: z.number(),
});

type FormValuesType = z.infer<typeof FormSchema>;

const categories = [
  {
    label: 'houses',
  },
  {
    label: 'apartments',
  },
  {
    label: 'hostels',
  },

  {
    label: 'frames',
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
  const form = useForm<FormValuesType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bed: 0,
      bedrooms: 0,
      bathrooms: 0,
      minPrice: 30000,
      maxPrice: 100000,
      category: '',
      categoryType: '',
      city: '',
      street: '',
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

  console.log('data', form.formState.errors);
  function onSubmit(data: FormValuesType) {
    if (!bed) {
      router.push(
        `/${data.category}?bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}`
      );
      return;
    }

    router.push(
      `/${data.category}?&bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}&city=${data.city}&${data.category}&bed=${data.bed}&bathrooms=${data.bathrooms}`
    );
  }

  const body = (
    <div className='flex flex-col divide-y'>
      {/* <div className='flex gap-4 flex-wrap py-5'></div>s */}

      <div className='py-6'>
        <h3>Property category</h3>
        <div
          className='
            flex flex-col mt-2 sm:flex-row gap-3'>
          {categories.map((item) => (
            <CategoryInput
              key={item.label}
              onClick={(value) => setCustomValue('category', value)}
              selected={category === item.label}
              label={item.label}
            />
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
        <div className='sm:w-5/12'>
          <Label>Kuanzia: {formatPrice(minPrice)}</Label>
          <Input
            type='number'
            onChange={(e) => setCustomValue('minPrice', Number(e.target.value))}
            placeholder=''
            className='border-gray-500 focus:border-none mt-1 focus-visible:ring-none focus-visible:ring-offset-0 focus-within:border-none focus:outline-none focus:ring-offset-0'
            name=''
            id=''
          />
        </div>
        <div className='sm:w-5/12'>
          <Label>Had: {formatPrice(maxPrice)}</Label>
          <Input
            className='mt-2'
            type='number'
            // disabled
            onChange={(e) => setCustomValue('maxPrice', Number(e.target.value))}
            placeholder=''
            name=''
            id=''
          />
        </div>
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
