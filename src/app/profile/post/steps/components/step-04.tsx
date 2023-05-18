import { useState, ChangeEvent } from 'react';
import UploadImage from '@/components/uploadImage';
import style from './style.module.css';

interface StepProp {
  formik: any;
}

function StepFour({ formik }: StepProp) {
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
    <>
      <UploadImage
        style={style}
        imageHandler={imageHandler}
        images={images}
        removeHandler={removeHandler}
      />
    </>
  );
}

export default StepFour;
