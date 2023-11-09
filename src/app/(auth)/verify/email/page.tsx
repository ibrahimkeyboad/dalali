'use client';

import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const metadata: Metadata = {
  title: 'Hakikisha namba yako ya simu',
};

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

type MakeOfferFormValues = z.infer<typeof FormSchema>;

function Page() {
  const router = useRouter();

  const form = useForm<MakeOfferFormValues>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmitHandler(value: MakeOfferFormValues) {
    try {
      const res = await axios.post('/api/auth/fungua-account', value);
      if (res.status == 201) {
        router.push('/verify');
        // toast.success(res.data.msg);
      } else {
        // toast.error('fail', res.data);
      }
    } catch (errors: any) {
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitHandler)}
          className=' bg-card w-[90%] shadow-lg shadow-gray-200 dark:shadow-none rounded-lg md:w-[70%] lg:w-[45%] px-10 m-auto gap-6 flex flex-col items-stretch border-2 py-4'>
          <h1 className='text-3xl font-semibold self-center  text-primary'>
            Create Your Account
          </h1>
        </form>
      </Form>
    </div>
  );
}

export default Page;
