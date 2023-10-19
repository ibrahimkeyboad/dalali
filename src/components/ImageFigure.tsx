'use client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  data: {
    images: [
      {
        uri: string;
        public_id: string;
      }
    ];
  };
};

const ImageFigure = ({ data }: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      style={{
        // @ts-ignore
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '15px',
        fontWeight: 'bolder',
        color: 'text-primary',
        overflow: 'hidden',
        borderRadius: '7px',
      }}>
      {data?.images?.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            quality={100}
            alt=''
            className='object-cover'
            priority={true}
            src={img.uri}
            sizes='100vw'
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageFigure;
