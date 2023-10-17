import { getHouses } from '@/actions/getHouses';
import Header from '@/components/header/Header';
import React from 'react';

async function page() {
  const houses = await getHouses();
  console.log(houses);
  return (
    <>
      <Header />
    </>
  );
}

export default page;
