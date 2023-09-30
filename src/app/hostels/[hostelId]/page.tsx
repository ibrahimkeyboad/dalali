import HouseRooms from '@/app/houses/components/HouseRooms';
import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import Header from '@/components/header/Header';
import Card from '@/components/posts/Card';
import React from 'react';

function page() {
  const data: any = {
    id: 'faf1',
    images: ['/images/cover3.jpg'],
    duration: 'mwezi',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium hic quia labore corrupti est, optio tenetur culpa quis quibusdam esse sunt minima ipsam repellendus eligendi incidunt aliquam quam dolores sit deserunt beatae possimus pariatur eveniet repudiandae qui. Porro beatae corrupti nisi maxime nam laboriosam doloribus dignissimos id voluptatem quae corporis natus dolorum, repellendus, totam facilis! Odio accusantium laboriosam cupiditate optio illo aliquid. Ut corrupti dolorem ab provident quo numquam quae.',
    bedrooms: 2,
    city: 'Arusha',
    street: 'Ngulelo',
    country: 'Tanzania',
    offers: ['umeme', 'maji', 'geti'],
    price: 50000,
    purpose: 'kukodishwa',
    userId: 'ie',
    category: 'house',
    owner: {
      name: 'Pisi Kali',
      phoneNumber: '+255620179067',
    },
  };

  const datas = {
    images: data.images,
  };

  return (
    <>
      <Header />
      <div className='bg-slate-50 dark:bg-[#0a192f]'>
        <section className='max-w-[1120px] px-3 md:px-10 m-auto'>
          <ImageFigure data={datas} />
          <div
            className={`dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y`}>
            <div className='flex items-center justify-between p-5'>
              <h2 className='tracking-widest font-bold text-3xl'>Overview</h2>
              <span className='bg-[#49b69c] p-1 rounded-md uppercase text-sm m-1 inline-block text-[#FFF]'>
                For {data?.purpose}
              </span>
            </div>
            <div>
              <div className='p-4 flex gap-8 md:items-center flex-col md:flex-row items-start justify-between'>
                <div className='md:flex gap-2 flex-col'>
                  <h3 className='flex items-center gap-1'>
                    <span>Tsh</span>
                    <span className='text-xl font-extrabold'>
                      {data?.price
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    <span>{data.duration}</span>
                  </h3>
                  <h3 className=''>
                    {`${data.street}, ${data.city} ${data.country}`}
                  </h3>
                </div>
                <figure className='flex justify-center items-center gap-4'>
                  <UserAvatar />
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
          </div>

          <HouseRooms />

          <Card>
            <h3 className='dark:text-[#e6f1ff] tracking-widest p-4 font-bold text-xl'>
              What this place offers
            </h3>
            <div className='flex p-4 gap-5 flex-col'>
              <ul className='flex flex-wrap gap-10 ml-10'>
                {data?.offers?.map((tag: any) => (
                  <li className='capitalize' key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <div className='dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y'>
            <h3 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3'>
              Description
            </h3>
            <p className='dark:text-gray-400 p-4 tracking-wide'>
              {data?.description}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
