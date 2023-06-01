import Heading from '@/components/Heading';
import TextField from '@/components/input';
import React from 'react';

interface StepProp {
  register: any;
  errors: any;
  disabled?: boolean;
}

function StepThree({ register, errors, disabled }: StepProp) {
  return (
    <div className='flex flex-col gap-8'>
      <Heading
        title='How would you describe your place?'
        subtitle='Short and sweet works best!'
      />
      <TextField
        label='Title'
        id='title'
        name='Title'
        disabled={disabled}
        register={register}
        errors={errors}
      />
      <hr />
      <TextField
        label='Description'
        id='description'
        name='Description'
        disabled={disabled}
        register={register}
        errors={errors}
      />
    </div>
  );
}

export default StepThree;
