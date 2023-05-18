import TextField from '@/components/input';
import React from 'react';

interface StepProp {
  formik: any;
}

function StepTwo({ formik }: StepProp) {
  return (
    <>
      <h2>{`Where's your property located?`}</h2>
      <div className={`grid md:grid-cols-2 items-center gap-6 mt-4`}>
        <div>
          <TextField formik={formik} hint='Street' type='text' name='street' />
        </div>
        <TextField formik={formik} hint='City' type='text' name='city' />
        <TextField formik={formik} hint='Country' type='text' name='country' />
      </div>
    </>
  );
}

export default StepTwo;
