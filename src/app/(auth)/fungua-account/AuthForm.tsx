'use client';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import axios from 'axios';
import InputAuth from '@/components/inputs/InputAuth';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface UserType {
  name: string;
  email: string;
  password: string;
}
function AuthForm() {
  const router = useRouter();
  const [toggle, setToggle] = useState<boolean>(false);

  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  const initialValues: UserType = {
    name: '',
    email: '',
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
      name: Yup.string().required('Name is required'),
    }),
  });

  async function onSubmitHandler(value: UserType) {
    const data = {
      name: value.name,
      email: value.email.toLowerCase().trim(),
      password: value.password.toLowerCase().trim(),
    };

    try {
      const res = await axios.post('/api/auth/fungua-account', data);

      if (res.status == 201) {
        router.push('/verify');
        toast.success(res.data.msg);
      } else {
        console.log(res.status);
        toast.error('fail', res.data);
      }
    } catch (errors: any) {
      console.log('errors', errors.response);

      toast.error(errors.response.data.error);
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`dark:shadow-none bg-primary-focus w-[100%] rounded-md py-20  md:w-[60%] m-auto items-center gap-8 flex flex-col`}>
      <h1 className='text-3xl font-semibold self-center text-neutral'>
        Create Your Account
      </h1>

      <div className='sm:w-[60%] w-[80%]'>
        <InputAuth name='name' type='text' formik={formik} hint='Full Name' />
        {formik.errors && (
          <p className='text-rose-600 font-semibold text-base'>
            {formik.errors && formik.touched.name && formik.errors.name}
          </p>
        )}
      </div>
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
          <p className='text-base-100 text-sm ml-2'>
            Please enter atleast 6 character
          </p>
        )}
      </div>

      <div className='flex flex-col gap-3'>
        <button
          type='submit'
          className={`dark:shadow-none bg-[#098366] rounded-lg py-3 mx-10 tracking-wider text-white shadow-lg shadow-gray-400`}>
          Sign up
        </button>
        <Link className='self-center' href='/login'>
          <span>Already a member? </span>
          <span className='font-bold'> Login</span>
        </Link>
      </div>
    </form>
  );
}

export default AuthForm;
