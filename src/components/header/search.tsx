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
import { toast } from '@/components/ui/use-toast';
import { Input } from '../ui/input';
import { IoIosSearch } from 'react-icons/io';
import { DropdownMenuProperty } from './dropdown';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
  location: z.string(),
  beds: z.number(),
  bathrooms: z.number(),
  bedrooms: z.number(),
  category: z.string(),
});

type ID = 'bedrooms' | 'bathrooms' | 'beds';

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
        className='gap-4 flex items-center relative'>
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
                  <SelectItem value='apartment'>apartment</SelectItem>
                  <SelectItem value='geust house'>geust house</SelectItem>
                  <SelectItem value='house'>house</SelectItem>
                  <SelectItem value='hostel'>hostel</SelectItem>
                  <SelectItem value='Frame'>frame</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <DropdownMenuProperty
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          beds={beds}
          onHandlerBathRoom={(value) => setCustomValue('bathrooms', value)}
          onHandlerBedRoom={(value) => setCustomValue('bedrooms', value)}
        />
        <Button type='submit'>
          <IoIosSearch size={25} />
        </Button>
      </form>
    </Form>
  );
}
