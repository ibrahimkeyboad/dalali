import { baseUrl } from '@/actions/url';
import axios from 'axios';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Hakikisha email yako',
};

interface ParamsProps {
  searchParams: {
    userId: string;
    uniqueString: string;
  };
}

interface Data {
  title: string;
  link: string;
  msg: string;
}

async function page({ searchParams: { uniqueString, userId } }: ParamsProps) {
  const res = await fetch(
    `${baseUrl}/verify?userId=${userId}&uniqueString=${uniqueString}`,
    { cache: 'no-store' }
  );

  const data: Data = await res.json();

  return (
    <div className='flex flex-col justify-center'>
      <h2>Verify Page</h2>
      <h3>{data.title}</h3>
      <Link href={data.link}>{data.msg}</Link>
    </div>
  );
}

export default page;
