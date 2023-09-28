import Accommodation from '@/models/accommodation';
import { House } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PostsProps {
  data: House;
}

function Posts({ data }: PostsProps) {
  return (
    <article className='relative overflow-hidden'>
      <Link href={`/${data.category}s/${data.id}`}>
        <Image
          alt='image'
          src={data.images}
          className='rounded-lg object-cover bg-black h-52'
          width={400}
          height={300}
          priority
        />
        <div
          className='
            flex
            flex-col
            overflow-hidden
            p-2'>
          <div className='flex gap-2 text-sm text-[#9da3ac]'>
            <span>{data.bathrooms} bathrooms</span>
            <span>{data.bedrooms} bedrooms</span>
            {/* <span>{data.area} (sqft)</span> */}
          </div>
          <div className='flex flex-col'>
            {/* <h3 className='dark:text-#ccd6f6] text-[#122c2e] font-medium flex tracking-wide'>{data.</h3> */}
            <h3 className='flex items-center gap-1'>
              <span>Tsh</span>
              <span className='font-extrabold'>
                {data?.price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span>{data.duration}</span>
            </h3>
            <h4 className='dark:text-[#b6bac1] font-normal text-[#2e5458] text-sm'>
              {data.street} {data.city}
            </h4>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Posts;
