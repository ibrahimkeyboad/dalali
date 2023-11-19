import Heading from '@/components/Heading';
import { Input } from '@/components/ui/input';
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
          <Input
            id='street'
            // label='Street'
            type='text'
            name='street'
          />
        </div>
        <Input
          id='street'
          // label='City'
          type='text'
          name='city'
        />
        <Input
          id='steet'
          // label='Country'
          type='text'
          name='country'
        />
      </div>
    </>
  );
}

export default StepTwo;
