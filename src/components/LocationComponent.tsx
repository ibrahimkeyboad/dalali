'use client';

import { ComboboxDemo } from './inputs/Chombobox';
import { useGetCountryCitiesQuery, useGetCountryQuery } from '@/contexts/api';

function LocationComponent({
  city,
  country,
  setCountry,
  setCity,
}: {
  city: string;
  country: string;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
}) {
  const { data: countries } = useGetCountryQuery('');
  const { data: cities } = useGetCountryCitiesQuery(country);
  return (
    <>
      <ComboboxDemo
        onChange={(value) => setCountry(value)}
        title='country'
        data={countries}
      />
      <ComboboxDemo
        onChange={(value) => setCity(value)}
        title='city'
        data={cities}
      />
    </>
  );
}

export default LocationComponent;
