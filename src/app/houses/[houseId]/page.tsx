import ImageFigure from '@/components/ImageFigure';
import Image from 'next/image';
import React from 'react';

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Apartment: ${params.id}`,
  };
}

async function Apartment({ params }: { params: { id: string } }) {
  // const res = await fetch('http://localhost:3000/api/apartment');
  // const data = await res.json();

  const data: any = {
    id: 'faf1',
    images: ['/images/cover.webp'],
    duration: 'siku',
    Description: 'ddfa',
    bathrooms: 1,
    bedrooms: 2,
    city: 'Arusha',
    street: 'Ngulelo',
    country: 'Tanzania',
    offers: 'umeme',
    price: 3233,
    purpose: 'kukodishwa',
    userId: 'ie',
    category: 'house',
  };

  return (
    <div className='bg-slate-50 dark:bg-[#0a192f]'>
      <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
        <ImageFigure apartment={data} />
        <div
          className={`dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y`}>
          <div className='flex items-center justify-between p-5'>
            <h2 className='tracking-widest font-bold text-2xl'>Overview</h2>
            <span className='bg-[#49b69c] p-1 rounded-md uppercase text-sm m-1 inline-block text-[#FFF]'>
              For {data?.purpose}
            </span>
          </div>
          <div>
            <div className='p-4 flex gap-8 md:items-center flex-col md:flex-row items-start justify-between'>
              <div className='md:flex gap-2 flex-col'>
                <h3 className='flex gap-2'>
                  <span
                    className={`dark:text-[#8892B0] ext-[#034047] font-bold`}>
                    Price:
                  </span>
                  {data?.price
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h3>
                <h3 className='flex gap-2'>
                  <span
                    className={`dark:text-[#8892B0] ext-[#034047] font-bold`}>
                    Address:
                  </span>
                  {data?.location}
                </h3>
              </div>
              <figure className='flex items-center gap-4'>
                <Image
                  placeholder='blur'
                  blurDataURL='/images/pisi.jpg'
                  src='/images/pisi.jpg'
                  className='rounded-full'
                  alt={data.title}
                  height={100}
                  width={100}
                />
                <figcaption className='flex flex-col'>
                  <span
                    className={`dark:text-[#e6f1ff] font-bold tracking-wide text-lg`}>
                    {data?.owner?.name}
                  </span>
                  <span className={`dark:text-[#ccd6f6] font-bold`}>
                    {data?.owner?.phoneNumber}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className='flex p-4 gap-5 flex-col items-center'>
            <h4 className='flex gap-2 items-center'>What this place offers</h4>
            <ul className='flex flex-wrap gap-10 ml-10'>
              {data?.tags?.map((tag: any) => (
                <li className='capitalize' key={tag?.id}>
                  {tag?.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y'>
          <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
            Description
          </h2>
          <p className='dark:text-gray-400 p-4 tracking-wide'>
            {data?.description}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Apartment;
