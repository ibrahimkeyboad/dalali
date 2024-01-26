'use client';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';

type Data = {
  email: string;
  password: string;
};

const FormSchema = z.object({
  email: z.string().email('Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Too Short!'),
});

type MakeOfferFormValues = z.infer<typeof FormSchema>;

function LoginForm({ email }: { email: string }) {
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  function toggleHandler() {
    setToggle((prev) => !prev);
  }
  const initialValues = {
    email: email ?? '',
    password: '',
  };

  const form = useForm<MakeOfferFormValues>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmitHandler(value: Data) {
    const res = await signIn('credentials', {
      email: value.email,
      password: value.password,
      redirect: false,
    });

    if (res?.ok && !res?.error) {
      toast.success('logged in');
      router.push('/');
    } else {
      toast.error(`${res?.error}`);
    }
  }

  return (
    <Form {...form}>
      <form
        className='grid content-center w-full'
        onSubmit={form.handleSubmit(onSubmitHandler)}>
        <Card className=' w-[100%] rounded-lg py-20 px-8  md:w-[45%] xl:w-[30%] m-auto items-stretch gap-8 flex flex-col'>
          <h1 className='lg:text-3xl text-xl px-4 font-semibold self-center  text-primary'>
            Login to Your Account
          </h1>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type='email' placeholder='Ibra' {...field} />
                </FormControl>
                <FormDescription>Your first name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder='Ibra' {...field} />
                </FormControl>
                <FormDescription>password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-col gap-3'>
            <Button type='submit' className={`btn btn-primary`}>
              Log in
            </Button>
            <Link className='self-center' href='/fungua-account'>
              <span>Already a member? </span>
              <span className='font-bold text-primary'> sigup</span>
            </Link>
          </div>
        </Card>
      </form>
    </Form>
  );
}

export default LoginForm;
