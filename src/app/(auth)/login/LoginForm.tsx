'use client';
import InputAuth from '@/components/inputs/InputAuth';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type Data = {
  email: string;
  password: string;
};

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
  const formik = useFormik({
    initialValues,
    onSubmit: onSubmitHandler,

    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
      password: Yup.string()
        .min(6, 'Too Short!')
        .required('Password is required'),
    }),
  });

  async function onSubmitHandler(value: Data) {
    const res = await signIn('credentials', {
      email: value.email,
      password: value.password,
      redirect: false,
    });

    console.log(res);

    if (res?.ok && !res?.error) {
      toast.success('logged in');
      router.push('/');
    } else {
      toast.error(`${res?.error}`);
    }
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`dark:shadow-none bg-neutral w-[100%] rounded-lg py-20  md:w-[60%] m-auto items-center gap-8 flex flex-col`}>
      <h1 className='text-3xl font-semibold self-center  text-primary'>
        Login to Your Account
      </h1>
      <div className='sm:w-[60%] w-[80%]'>
        <InputAuth name='email' type='email' formik={formik} hint='Email' />
        {formik.errors && (
          <p className='text-rose-600 font-semibold text-base'>
            {formik.errors && formik.touched.email && formik.errors.email}
          </p>
        )}
      </div>

      <div className='sm:w-[60%] w-[80%]'>
        <span className='flex items-center'>
          <InputAuth
            type={toggle ? 'text' : 'password'}
            name='password'
            formik={formik}
            hint='Password'
          />
          {!toggle ? (
            <HiOutlineEyeOff
              onClick={toggleHandler}
              size={25}
              className='-m-7 cursor-pointer'
            />
          ) : (
            <HiOutlineEye
              onClick={toggleHandler}
              size={25}
              className='-m-7 cursor-pointer'
            />
          )}
        </span>

        {formik.errors && formik.touched.password && formik.errors.password ? (
          <p className='text-rose-600 font-bold text-base'>
            {formik.errors && formik.touched.password && formik.errors.password}
          </p>
        ) : (
          <p className='text-gray-400 text-sm ml-2'>
            Please enter atleast 6 character
          </p>
        )}
      </div>
      <div className='flex flex-col gap-3'>
        <button type='submit' className={`btn btn-primary`}>
          Log in
        </button>
        <Link className='self-center' href='/login'>
          <span>Already a member? </span>
          <span className='font-bold text-primary'> sigup</span>
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
