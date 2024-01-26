import Header from '@/components/header/Header';
import { Card } from '@/components/ui/card';
import React from 'react';

function Emergency() {
  return (
    <>
      <Header />
      <section className='grid content-center'>
        <ul className='grid grid-cols-2 justify-center gap-5'>
          <li>
            <Card className='p-4'>Tanesco</Card>
          </li>
          <li>
            <Card className='p-4'>Zima moto</Card>
          </li>
          <li>
            <Card className='p-4'>Idara ya maji</Card>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Emergency;
