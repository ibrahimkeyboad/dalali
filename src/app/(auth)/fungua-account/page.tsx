'use client';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import style from '../signup.module.css';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import axios from 'axios';
import InputAuth from '@/components/inputs/InputAuth';
import { toast } from 'react-hot-toast';

function Page() {
  const [toggle, setToggle] = useState<boolean>(false);
  interface UserType {
    name: string;
    email: string;
    password: string;
  }

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
      const res = await axios.post(
        'http://localhost:3000/api/auth/fungua-account',
        data
      );

      if (res.status == 201) {
        toast.success(res.data.msg);
      } else {
        console.log(res.status);
        toast.error('fail', res.data);
      }
    } catch (errors: any) {
      console.log('errors', errors.response.data);

      toast.error(errors.response.data.error);
    } finally {
      // setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`dark:shadow-none dark:bg-[#112240] ${style.form}`}>
      <h1 className='text-2xl self-center'>Create Your Account</h1>

      <div className={style['input-control']}>
        <InputAuth name='name' type='text' formik={formik} hint='Full Name' />
        {formik.errors && (
          <p className='text-red-400 text-sm'>
            {formik.errors && formik.touched.name && formik.errors.name}
          </p>
        )}
      </div>
      <div className={style['input-control']}>
        <InputAuth name='email' type='email' formik={formik} hint='Email' />
        {formik.errors && (
          <p className='text-red-400 text-sm'>
            {formik.errors && formik.touched.email && formik.errors.email}
          </p>
        )}
      </div>

      <div className={style['input-control']}>
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
          <p className='text-red-400 text-sm'>
            {formik.errors && formik.touched.password && formik.errors.password}
          </p>
        ) : (
          <p className={style.desc}>Please enter atleast 6 character</p>
        )}
      </div>

      <div className='flex flex-col gap-3'>
        <button
          type='submit'
          className={`dark:shadow-none ${style.btn} shadow-lg shadow-gray-400`}>
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

export default Page;
