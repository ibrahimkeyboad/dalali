import Counter from '@/components/Counter';
import Heading from '@/components/Heading';
import React from 'react';

interface Props {
  bedrooms: number;
  beds: number;
  sofa: number;
  bathrooms: number;
  onHandlerBeedRoom: (value: number) => void;
  onHandlerBathRoom: (value: number) => void;
  onHandlerSofa: (value: number) => void;
}

function Stepone({
  bathrooms,
  bedrooms,
  sofa,
  onHandlerBathRoom,
  beds,
  onHandlerBeedRoom,
  onHandlerSofa,
}: Props) {
  return (
    <section className='flex flex-col gap-8 divide-dashed'>
      <Heading
        title='Share some basics about your place'
        subtitle='What amenitis do you have?'
      />
      <Counter
        onChange={onHandlerBeedRoom}
        value={bedrooms}
        title='Rooms'
        subtitle='How many rooms do you have?'
      />
      <Counter
        onChange={onHandlerBathRoom}
        value={bathrooms}
        title='Bathrooms'
        subtitle='How many bathrooms do you have?'
      />
      <Counter
        onChange={onHandlerSofa}
        value={sofa}
        title='Sofa'
        subtitle='How many sofa do you have?'
      />
      {/* <Counter onChange={onHandlerChange} value={} title='' subtitle='' /> */}
    </section>
  );
}

export default Stepone;
