import Heading from '@/components/Heading';
import { Input } from '@/components/ui/input';
import React from 'react';

interface StepProp {
  register: any;
  errors: any;
  disabled?: boolean;
}

function StepThree({ register, errors, disabled }: StepProp) {
  return (
    <div className='flex flex-col w-[60%] gap-10'>
      <Heading
        title='How would you describe your place?'
        subtitle='Short and sweet works best!'
      />
      <Input
        label='Title'
        id='title'
        name='Title'
        disabled={disabled}
        register={register}
        errors={errors}
      />
      <Input
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
