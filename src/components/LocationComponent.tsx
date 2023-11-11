import React from 'react';
import { ComboboxDemo } from './Chombobox';

async function getLocation() {
  const res = await fetch('http://localhost:3000/api/location', {
    cache: 'no-cache',
  });

  const data = await res.json();

  return data;
}
async function LocationComponent() {
  const data = await getLocation();
  console.log(data);
  return (
    <div>
      <ComboboxDemo title='country' data={data} />
      <ComboboxDemo title='city' data={data[0].cities} />
    </div>
  );
}

export default LocationComponent;
