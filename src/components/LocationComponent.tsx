'use client';

import { useQuery } from '@tanstack/react-query';
import { ComboboxDemo } from './inputs/Chombobox';
import { baseUrl } from '@/actions/url';

function LocationComponent({
  country,
  setCountry,
  setCity,
}: {
  city: string;
  country: string;
  setCountry: (value: string) => void;
  setCity: (value: string) => void;
}) {
  const { data: countries } = useQuery({
    queryKey: ['Location'],
    queryFn: getCountries,
  });
  const { data: cities } = useQuery({
    queryKey: ['City'],
    queryFn: getCities,
  });

  async function getCountries() {
    const res = await fetch(`${baseUrl}/location`);

    const data = await res.json();

    return data;
  }

  async function getCities() {
    if (countries[0].name) return;

    const res = await fetch(
      `${baseUrl}/location/city/${countries[0].name.value}`
    );

    const data = await res.json();

    console.log(data);
    return data;
  }

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
