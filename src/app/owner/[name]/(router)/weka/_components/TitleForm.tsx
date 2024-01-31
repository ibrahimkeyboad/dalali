'use client';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';

type TitleFormProps = {
  initialData: { title: string };

  properyId: string;
};

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
});

type FormValuesType = z.infer<typeof formSchema>;

function TitleForm({ initialData, properyId }: TitleFormProps) {
  const form = useForm<FormValuesType>({
    defaultValues: {
      title: 'Zahara',
    },
    resolver: zodResolver(formSchema),
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing((prevState) => !prevState);
  }

  function onSubmit(value: FormValuesType) {
    // console.log('value', value);
  }

  const { isSubmitting, isValid } = form.formState;
  return (
    <div className='mt-6 bg-slate-100 rounded-md p-4'>
      <div className='font-medium flex items-center justify-between'>
        Property Title
        <Button onClick={handleEditing} variant='ghost'>
          {isEditing ? (
            <h3>Cancel</h3>
          ) : (
            <>
              <Pencil className='h-4 w-4 mr-2' />
              Edit title
            </>
          )}
        </Button>
      </div>
      <div>
        {isEditing ? (
          <Form {...form}>
            <form
              className='space-y-4 mt-4'
              onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='title'
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input disabled={isSubmitting} {...field} />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <div className='flex items-center gap-x-2'>
                <Button disabled={!isValid || isSubmitting} type='submit'>
                  Save
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <p className='text-sm mt-2'>{initialData.title}</p>
        )}
      </div>
    </div>
  );
}

export default TitleForm;
