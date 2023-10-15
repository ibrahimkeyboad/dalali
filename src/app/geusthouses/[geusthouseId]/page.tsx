import ImageFigure from '@/components/ImageFigure';
import UserAvatar from '@/components/UserAvatar';
import Header from '@/components/header/Header';
import RoomContaine from '@/components/posts/RoomContaine';
import React from 'react';

function page() {
  const data: any = {
    id: 'oda',
    price: 50000,
    category: 'lodge',
    images: ['/images/cover1.jpg'],
    duration: 'siku',
    description:
      'Located close to the Tibetan Buddhist temple Odsal Ling, Toca is a space of retreat for those who wish to be near Sao Paulo and still have a good connection with nature. A house, built of wooden base, brick and glass is surrounded by a green field of 5000 m2 where, over the last 20 years,  it has being planted various species of fruit trees and ornamental plants.',
    city: 'Arusha',
    street: 'Ngulelo',
    country: 'Tanzania',
    offers: ['umeme', 'maji', 'internet', 'tv', 'room service'],
    bedroom: [
      {
        type: 'luxury',
        size: '6*6',
      },
      {
        type: 'medium',
        size: '4*4',
      },
    ],

    barhroom: {
      type: 'luxury',
      shower: 'hot water',
    },

    seatroom: {
      sofa: {
        number: 2,
      },
    },
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
        {/*  @ts-ignore */}

          <ImageFigure data={datas} />
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
            <div className='flex p-4 gap-5 flex-col items-center'>
              <h4 className='flex gap-2 items-center'>
                What this place offers
              </h4>
              <nav>
                <ul className='flex flex-wrap gap-10 ml-10'>
                  {data?.offers?.map((tag: any) => (
                    <li className='capitalize' key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <RoomContaine />
          <div className='dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y'>
            <h2 className='dark:text-[#e6f1ff] tracking-widest font-bold text-xl p-3 pb-5 '>
              About this place
            </h2>
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
