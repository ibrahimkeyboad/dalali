import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const data = {
  name: 'Victoria place',
  category: '',
  _id: '',
  bath: [0, 9, 7],
  images: [
    {
      uri: 'apartment.jpg',
    },
  ],
  room: [],
  type: '',
  location: {
    street: ' Kinondoni District Kijitonyama Ward Along New Bagamoyo road.',
    city: 'Dar es salam',
    country: 'Tanzania',
  },

  price: {
    amount: 4000,
    duration: '',
  },
};

// function generatePrice(price: number) {
//   return new Intl.NumberFormat('en-USD', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(price);
// }

const yes = true;

function NhcPage() {
  return (
    <section className='p-40'>
      <div
        className='
      px-8
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      justify-items-center
      sm:gap-2
      md:grid-cols-3
      md:gap-3
      xl:grid-cols-4
      xl:gap-x-4
      xl:gap-y-8
        '>
        <article className='relative overflow-hidden'>
          <Link href={`/${data.category}s/${data._id}`}>
            <div className='relative'>
              <Image
                alt='image'
                src={`/images/${data.images[0].uri}`}
                className='rounded-lg object-cover bg-black h-60'
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
              text-[15px]
              flex-col
              overflow-hidden
              p-2'>
              <div className='flex gap-2 text-sm text-[#9da3ac]'>
                <span>
                  {data.bath.length}
                  {` bath${data.bath.length > 1 ? 's' : ''}`}
                </span>
                <span>
                  {data.room.length}
                  {` room${data.room.length > 1 ? 's' : ''}`}
                </span>
                {/* <span>{data.area} (sqft)</span> */}
              </div>
              <h4 className='capitalize font-bold '>{data.type}</h4>
              <div className='flex flex-col'>
                {/* <h3 className='dark:text-#ccd6f6] text-[#122c2e] font-medium flex tracking-wide'>{data.</h3> */}
                <h4 className='dark:text-[#b6bac1] '>
                  {data.location.street} {data.location.city}
                </h4>
                <h3 className='flex items-center gap-1'>
                  <span>Tsh</span>
                  <span className='font-extrabold'>
                    {data?.price.amount
                      ?.toString()
                      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                  <span>{data.price.duration}</span>
                </h3>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default NhcPage;
