'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '../ui/input';
import { IoIosSearch } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import { ApartmentDropdown } from './ApartmentDropdown';
import { HomeDropdown } from './HomeDropdown';
import { DropdownMenuProperty } from './LodgeDropdown';
import { FrameDropdown } from './FrameDropdown';

const FormSchema = z.object({
  location: z.string(),
  beds: z.number(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  category: z.string(),
  size: z.number(),
});

type ID = 'bedrooms' | 'bathrooms' | 'beds' | 'size';

export function SelectForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bathrooms: 1,
      beds: 1,
      bedrooms: 1,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(
      `/search/${data.category}?bed=${data.beds}&bathrooms=${data.bathrooms}&bedrooms=${data.bedrooms}&location=${data.location}`
    );
  }

  const bedrooms = form.watch('bedrooms');
  const bathrooms = form.watch('bathrooms');
  const beds = form.watch('beds');
  const category = form.watch('category');
  const size = form.watch('size');

  function setCustomValue(id: ID, value: any) {
    console.log('value', value);
    form.setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='gap-4 lg:flex items-center hidden relative'>
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder='Location...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a property to display' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='apartment'>Apartment</SelectItem>
                  {/* <SelectItem value='geusthouse'>Geust house</SelectItem> */}
                  <SelectItem value='house'>House</SelectItem>
                  <SelectItem value='hostel'>Hostel</SelectItem>
                  <SelectItem value='frame'>Frame</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {category === 'apartment' && (
          <ApartmentDropdown
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            beds={beds}
            onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
            onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
          />
        )}
        {category === 'house' && (
          <HomeDropdown
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            beds={beds}
            onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
            onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
          />
        )}
        {category === 'hostel' && (
          <DropdownMenuProperty
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            beds={beds}
            onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
            onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
            onHandlerBed={(value) => setCustomValue('beds', value)}
          />
        )}
        {category === 'lodge' && (
          <DropdownMenuProperty
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            beds={beds}
            onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
            onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
            onHandlerBed={(value) => setCustomValue('beds', value)}
          />
        )}
        {category === 'geusthouse' && (
          <DropdownMenuProperty
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            beds={beds}
            onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
            onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
            onHandlerBed={(value) => setCustomValue('beds', value)}
          />
        )}
        {category === 'frame' && (
          <FrameDropdown
            size={size}
            onHandlerSize={(value) => setCustomValue('size', value)}
          />
        )}

        <Button type='submit'>
          <IoIosSearch size={25} />
        </Button>
      </form>
    </Form>
  );
}
