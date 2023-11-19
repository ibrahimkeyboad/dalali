'use client';

import Modal from '@/components/modal/Modal';
import { Input } from '@/components/ui/input';
import { ChangeEvent } from 'react';

interface ImageUpload {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  setLabel: (value: string) => void;
  imageHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  handlerCoverImage: (event: ChangeEvent<HTMLInputElement>) => void;
}

function UploadImageModal({
  handlerCoverImage,
  isOpen,
  onClose,
  onSubmit,
  setLabel,
}: ImageUpload) {
  const body = (
    <div className='flex flex-col gap-4'>
      <label
        className='
          dark:border-[#d9dfe8] 
          bg-[#112240] 
          border-2 
          dark:hover:bg-white 
          duration-150
          hover:text-[#112240] 
          inline-block w-[150px] 
          relative 
          p-3 
          text-white 
          text-center 
          cursor-pointer 
          font-bold rounded-md'>
        <span>Add image</span>

        <input
          type='file'
          accept='image/*'
          className='inline-block border w-[90px] cursor-pointer absolute border-fuchsia-800 opacity-0 z-[21'
          onChange={handlerCoverImage}
          multiple
        />
      </label>
      <Input id='label' />
    </div>
  );

  return (
    <Modal
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      body={body}
      actionLabel='cancel'
      title='Add an image and title to discribe'
    />
  );
}

export default UploadImageModal;
