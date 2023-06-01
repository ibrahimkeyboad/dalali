import Heading from '@/components/Heading';
import TextField from '@/components/input';
import React from 'react';

interface StepProp {
  register: any;
  errors: any;
}

function StepTwo({ register, errors }: StepProp) {
  return (
    <>
      <Heading
        title='Where is your place located?'
        subtitle='Help people find you home easly!'
      />
      <div className={`grid md:grid-cols-2 items-center gap-6 mt-4`}>
        <div>
          <TextField
            id='street'
            register={register}
            errors={errors}
            label='Street'
            type='text'
            name='street'
          />
        </div>
        <TextField
          id='street'
          register={register}
          errors={errors}
          label='City'
          type='text'
          name='city'
        />
        <TextField
          id='steet'
          register={register}
          errors={errors}
          label='Country'
          type='text'
          name='country'
        />
      </div>
    </>
  );
}

export default StepTwo;
