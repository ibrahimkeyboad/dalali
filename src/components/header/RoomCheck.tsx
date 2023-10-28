import React from 'react';
import { CheckboxWithText } from '../inputs/chek';

function RoomCheck() {
  return (
    <div className='p-6 flex flex-col gap-3'>
      <CheckboxWithText title='single' desc='contain only one room' />
      <CheckboxWithText title='double' desc='contain two rooms' />
      <CheckboxWithText title='single self' desc='hove one room one ' />
      <CheckboxWithText
        title='self container'
        desc='have more than two rooms'
      />
    </div>
  );
}

export default RoomCheck;
