import React from 'react';
import { CheckboxWithText } from '../inputs/chek';

function RoomCheck() {
  return (
    <div className='p-6 flex flex-col gap-3'>
      <CheckboxWithText title='singlar' desc='contain only one room' />
      <CheckboxWithText title='double' desc='contain two rooms' />
      <CheckboxWithText title='singlar self' desc='hove one room one ' />
      <CheckboxWithText title='self container' desc='have more than one room' />
    </div>
  );
}

export default RoomCheck;
