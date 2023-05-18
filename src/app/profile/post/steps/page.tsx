'use client';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import StepOne from './components/step-01';
import StepTwo from './components/step-02';
import StepThree from './components/step-03';
import StepFour from './components/step-04';
import { motion } from 'framer-motion';

function StepPages() {
  const [index, setIndex] = useState<number>(0);
  interface TypeValue {
    street: string;
    city: string;
    price: string;
    description: string;
    purpose: string;
    bathrooms: string;
    bed: string;
  }

  console.log(index);

  const initialValues: TypeValue = {
    city: '',
    street: '',
    price: '',
    description: '',
    purpose: '',
    bathrooms: '',
    bed: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
  });

  const components = [
    <StepOne key={1} formik={formik} />,
    <StepTwo key={2} formik={formik} />,
    <StepThree key={3} formik={formik} />,
    <StepFour key={4} formik={formik} />,
  ];

  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 0,
    },
    exit: {
      x: -200,
      opacity: 0,
    },
  };

  function prevHandler() {
    if (index === 0) {
      setIndex(components.length - 1);
    }

    setIndex((prev) => prev - 1);
  }

  function nextHandler() {
    if (index === components.length - 1) {
      setIndex(0);
    }

    setIndex((prev) => prev + 1);
  }

  async function submitHandler() {}
  return (
    <form className=''>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
        exit='closed'
        variants={variants}>
        {components[index]}
      </motion.div>
      <nav className='flex justify-between mt-9'>
        {index !== 0 && (
          <button type='button' onClick={prevHandler}>
            Back
          </button>
        )}
        <button type='button' onClick={nextHandler}>
          Next
        </button>
      </nav>
    </form>
  );
}

export default StepPages;
