'use client';
import Image from 'next/image';

type Props = {
  data: {
    images: any[];
  };
};

const ImageFigure = ({ data }: Props) => {
  return (
    <div className='relative max-w-5xl h-[25rem] md:h-[36rem] rounded-md overflow-hidden'>
      {data?.images?.map((img, i) => (
        <Image
          key={i}
          quality={100}
          alt=''
          className='object-cover'
          priority={true}
          src={img}
          sizes='(min-width: 768px) 70vw,
    (min-width: 1200px) 100vw,
    50vw'
          fill
        />
      ))}
    </div>
  );
};

export default ImageFigure;
