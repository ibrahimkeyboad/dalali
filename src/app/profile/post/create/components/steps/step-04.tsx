import { useState, ChangeEvent, useCallback } from 'react';
import style from '../style.module.css';
import Heading from '@/components/Heading';
import UploadImageModal from '../UploadImageModal';
import Image from 'next/image';
import { MdClear } from 'react-icons/md';

interface StepProp {
  handelerImageCover: (uri: File | null, label: string) => void;
  handelerImages: (uri: File | null, label: string) => void;
  imageCover: {
    label: string;
    uri: Blob | MediaSource | null;
  };
}

function StepFour({ handelerImageCover, imageCover }: StepProp) {
  const [images, setImages] = useState<File[]>([]);
  const [image, setImage] = useState<File>();
  const [label, setLabel] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const removeHandler = useCallback(
    (index: number) => {
      const newImgs = [...images];
      newImgs.splice(index, 1);
      setImages(newImgs);
    },
    [images]
  );

  const handlerClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handlerOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const imageHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
    },
    [images]
  );

  const handlerCoverImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event?.target.files[0];
        imageCover.uri = file;
        setImage(file);
      }
      return;
    },
    [imageCover]
  );

  const onSubmit = useCallback(() => {
    if (image && label) {
      handelerImageCover(image, label);
    }

    if (images) {
      handelerImageCover;
    }
  }, [handelerImageCover, image, images, label]);

  return (
    <>
      <UploadImageModal
        onSubmit={onSubmit}
        setLabel={setLabel}
        imageHandler={imageHandler}
        handlerCoverImage={handlerCoverImage}
        isOpen={isOpen}
        onClose={handlerClose}
      />
      <section className='flex flex-col gap-4'>
        <Heading
          title='Add some photos of your place'
          subtitle='Show people what your place looks like!'
        />

        <button type='button' onClick={handlerOpen}>
          upload
        </button>

        {/* <UploadImage
          style={style}
          imageHandler={imageHandler}
          images={images}
          removeHandler={removeHandler}
        /> */}

        {imageCover.uri && (
          <div>
            <h3 className='text-gray-400'>{imageCover.label}</h3>
            <figure className='relative my-2 h-64 w-64'>
              <Image
                className='object-cover rounded-lg h-full w-full'
                width={400}
                height={400}
                priority
                quality={90}
                src={URL.createObjectURL(imageCover?.uri)}
                alt='photo'
              />
              <span className='absolute bg-white rounded-xl p-1 top-1 right-1 font-bold'>
                <MdClear
                  // onClick={() => removeHandler(index)}
                  className={style.icon}
                  size={15}
                  fontWeight={900}
                />
              </span>
            </figure>
          </div>
        )}
      </section>
    </>
  );
}

export default StepFour;
