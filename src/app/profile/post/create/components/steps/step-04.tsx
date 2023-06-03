import { useState, ChangeEvent } from 'react';
import style from '../style.module.css';
import UploadImage from '../uploadImage';
import Heading from '@/components/Heading';
import ImageUpload from '../ImageUpload';

interface StepProp {
  handelerImageCover: (value: any) => void;
  imageCover: string | null;
}

function StepFour({ handelerImageCover, imageCover }: StepProp) {
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
        handelerImageCover(file);
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

      <div className='border'>
        <h3>Upload a photo for your </h3>
      </div>
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
