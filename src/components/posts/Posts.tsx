import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';

interface PostsProps {
  data: Accommodation;
  yes?: boolean;
}

function Posts({ data, yes }: PostsProps) {
  return (
    <article className='relative overflow-hidden'>
      <Link href={`/${data.category}s/${data._id}`}>
        <div className='relative'>
          <Image
            alt='image'
            src={`/images/${data.images[0].uri}`}
            className='rounded-lg object-cover bg-black h-52'
            width={400}
            height={300}
            priority
          />
          {yes && (
            <Badge className='absolute top-1 right-1 border capitalize font-bold border-primary-foreground'>
              {data.category}
            </Badge>
          )}
        </div>
        <div
          className='
            flex
            flex-col
            overflow-hidden
            p-2'>
          <div className='flex gap-2 text-sm text-[#9da3ac]'>
            <span>
              {data.bath.length}
              {` bathroom${data.bath.length > 1 ? 's' : ''}`}
            </span>
            <span>
              {data.room.length}
              {` bedroom${data.room.length > 1 ? 's' : ''}`}
            </span>
            {/* <span>{data.area} (sqft)</span> */}
          </div>
          <h4>{data.type}</h4>
          <div className='flex flex-col'>
            {/* <h3 className='dark:text-#ccd6f6] text-[#122c2e] font-medium flex tracking-wide'>{data.</h3> */}
            <h3 className='flex items-center gap-1'>
              <span>Tsh</span>
              <span className='font-extrabold'>
                {data?.price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span>{data.duration}</span>
            </h3>
            <h4 className='dark:text-[#b6bac1] '>
              {data.street} {data.city}
            </h4>
            <h4>{data.located}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Posts;
