import HouseRooms from '@/app/houses/components/HouseRooms';
import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import Header from '@/components/header/Header';
import Card from '@/components/posts/Card';
import React from 'react';

function FrameDetailPage() {
  const data = {
    price: 500000,
    Image: ['/images/cover3.jpg'],
    purpose: 'Kukodishwa',
    duration: 'mwezi',
    street: 'Kijenge',
    city: 'Arusha',
    country: 'Tanzania',
    owner: {
      name: 'Zahara',
      phoneNumber: '+2355629179067',
    },
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore provident veniam delectus dolorum officiis, ullam vitae id corporis magni quia corrupti velit eum, quidem harum ut culpa. Aliquam qui ex numquam cum. Officia nulla ullam possimus iure. Odit, commodi quasi?',
  };

  const datas = {
    images: data.Image,
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
              <span className='bg-[#0f7d63] p-1 rounded-md uppercase text-sm m-1 inline-block text-[#FFF]'>
                {data?.purpose}
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
                  <h4>609 sqft</h4>
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

export default FrameDetailPage;
