import TextField from '@/components/input';
import { styleControl } from '@/components/select';
import React, { useState } from 'react';
import Select from 'react-select';

interface StepProp {
  formik: any;
}

function StepOne({ formik }: StepProp) {
  const [contain, setContain] = useState(false);
  const options = [
    { value: 'furnished ', label: 'furnished ' },
    { value: 'unfurnished ', label: 'unfurnished ' },
  ];

  function handlerChange(data: any) {
    if (data.value === options[0].value) {
      setContain(true);
    } else {
      setContain(false);
    }
  }

  return (
    <div className={`items-center  py-6 px-4`}>
      <div className='flex flex-col mb-8 justify-between md:flex-row gap-3'>
        <h3>Property contain </h3>

        <Select
          styles={styleControl}
          instanceId='id'
          onChange={handlerChange}
          placeholder='Select type property'
          options={options}
        />
      </div>

      <div className='grid md:grid-cols-2 flex-wrap gap-8  mt-2'>
        <div>
          <TextField
            formik={formik}
            hint='Bathroom'
            type='number'
            name='bathrooms'
          />
        </div>
        <div>
          <TextField
            formik={formik}
            type='number'
            name='bedrooms'
            hint='Bedrooms'
          />
        </div>
        {contain && (
          <>
            <div>
              <TextField formik={formik} type='number' name='bed' hint='Bed' />
            </div>
            <div>
              <TextField
                formik={formik}
                type='number'
                name='sofa'
                hint='Sofa'
              />
            </div>
          </>
        )}
        <div>
          <TextField
            formik={formik}
            type='number'
            name='area'
            hint='Plot size   (sqft)'
          />
        </div>
      </div>
    </div>
  );
}

export default StepOne;
