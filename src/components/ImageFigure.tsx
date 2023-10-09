'use client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  data: {
    images: any[];
  };
};

const ImageFigure = ({ data }: Props) => {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <div className='relative max-w-5xl h-[25rem] md:h-[36rem] rounded-md overflow-hidden'>
        {data?.images?.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              quality={100}
              alt=''
              className='object-cover'
              priority={true}
              src={img}
              sizes='100vw'
              fill
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ImageFigure;
