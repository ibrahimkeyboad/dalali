'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import axios from 'axios';
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
import PhoneNumber from '@/components/inputs/PhoneNumber';
import { Merriweather } from 'next/font/google';
import { cn } from '@/lib/utils';

const LocationComponent = dynamic(
  () => import('@/components/LocationComponent'),
  { loading: () => <p>loading..</p> }
);

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, {
    message: 'password is too small',
  }),
  phone: z.string().min(2, {
    message: 'provide your phone number',
  }),

  country: z.string(),
  city: z.string(),
});

type ID = 'country' | 'city';

type MakeOfferFormValues = z.infer<typeof FormSchema>;

const merriweather = Merriweather({ weight: '700', subsets: ['latin'] });

function AuthForm() {
  const router = useRouter();

  const form = useForm<MakeOfferFormValues>({
    defaultValues: {
      country: 'tanzania',
      // firstName: 'Zahara',
    },
    resolver: zodResolver(FormSchema),
  });

  async function onSubmitHandler(value: MakeOfferFormValues) {
    const data = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email.toLowerCase().trim(),
      password: value.password.toLowerCase().trim(),
    };

    try {
      const res = await axios.post('/api/auth/fungua-account', data);

      if (res.status == 201) {
        router.push('/verify');
        toast.success(res.data.msg);
      } else {
        toast.error('fail', res.data);
      }
    } catch (errors: any) {
    } finally {
      // setIsLoading(false);
    }
  }

  const country = form.watch('country');
  const city = form.watch('city');

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

  // console.log(country);
  // console.log(city);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className=' bg-card w-[90%] shadow-lg shadow-gray-200 dark:shadow-none rounded-lg md:w-[70%] lg:w-[45%] xl:w-[40%] px-10 m-auto border-2 py-10'>
        <h1
          className={cn(
            'text-3xl font-semibold text-center mb-6 text-primary',
            merriweather.className
          )}>
          Create Your Account
        </h1>

        <div className='w-[70%] gap-6 flex flex-col items-stretch m-auto'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='Zahara' {...field} />
                </FormControl>
                <FormDescription>Your first name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='Doe' {...field} />
                </FormControl>
                <FormDescription>Your second name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='ibradoe@example.com' {...field} />
                </FormControl>
                <FormDescription>Your email address</FormDescription>
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
                  <Input type='password' placeholder='password' {...field} />
                </FormControl>
                <FormDescription>Create a strong password </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem>
            <FormLabel className='mb-3'>Location</FormLabel>
            <div className='flex gap-4'>
              <LocationComponent
                country={country}
                city='city'
                setCountry={(value) => setCustomValue('country', value)}
                setCity={(value) => setCustomValue('city', value)}
              />
            </div>
          </FormItem>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneNumber />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>Submit</Button>

          <div className='flex flex-col gap-3'>
            <Link className='self-center' href='/login'>
              <span>Already a member? </span>
              <span className='font-bold text-primary'> Login</span>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default AuthForm;
