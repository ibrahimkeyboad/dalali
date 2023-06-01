import { useState, ChangeEvent } from 'react';
import style from '../style.module.css';
import UploadImage from '../uploadImage';
import Heading from '@/components/Heading';
import ImageUpload from '../ImageUpload';

interface StepProp {
  register: any;
}

function StepFour({ register }: StepProp) {
  const [images, setImages] = useState<File[]>([]);

  function removeHandler(index: number) {
    const newImgs = [...images];
    newImgs.splice(index, 1);
    setImages(newImgs);
  }

  function imageHandler(event: ChangeEvent<HTMLInputElement>) {
    let imgs: File[] = [];
    let num = 0;
    const files = [...event.target.files!];
    files.forEach((file) => {
      num += 1;
      if (num <= 10) {
        imgs.push(file);
        return imgs;
      }
    });

    setImages([...images, ...imgs]);
  }
  return (
    <section className='flex flex-col gap-4'>
      <Heading
        title='Add some photos of your place'
        subtitle='Show people what your place looks like!'
      />
      <UploadImage
        style={style}
        imageHandler={imageHandler}
        images={images}
        removeHandler={removeHandler}
      />
      <ImageUpload onChange={() => {}} value='' />
    </section>
  );
}

export default StepFour;
