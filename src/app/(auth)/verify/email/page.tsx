import axios from 'axios';
import Link from 'next/link';
import React from 'react';

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
    `http://localhost:3000/api/verify?userId=${userId}&uniqueString=${uniqueString}`,
    { cache: 'no-store' }
  );

  const data: Data = await res.json();

  console.log('data', data);

  return (
    <div className='flex flex-col justify-center'>
      <h2>Verify Page</h2>
      <h3>{data.title}</h3>
      <Link href={data.link}>{data.msg}</Link>
    </div>
  );
}

export default page;
