import React from 'react';

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Apartment: ${params.id}`,
  };
}

async function Apartment({ params }: { params: { id: string } }) {
  const res = await fetch('http://localhost:3000/api/apartment');
  const data = await res.json();

  return (
    <>
      <div>Apartment: {params.id}</div>
      <p>{data.msg}</p>
    </>
  );
}

export default Apartment;
