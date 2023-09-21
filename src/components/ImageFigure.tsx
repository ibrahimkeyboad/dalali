'use client';
import Image from 'next/image';

type Props = {
  apartment: {
    title: string;
    images: [
      {
        url: string;
      }
    ];
  };
};

const ImageFigure = ({ apartment }: Props) => {
  return (
    <div className='relative w-52 h-52 '>
      {apartment?.images?.map((img, i) => (
        <Image
          key={i}
          quality={100}
          alt={apartment?.title}
          className=''
          priority
          src={'/images/cover.webp'}
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
