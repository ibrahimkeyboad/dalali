'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import cloudinary from 'cloudinary-react';

const Form = () => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    images: File[];
  }>({
    name: '',
    email: '',
    images: [],
  });

  const { register, setValue } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.name, event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    uploadImages(formState.images);
  };

  const uploadImages = async (images: File[]) => {
    try {
      const responses = await Promise.all(
        images.map((image) => cloudinary.upload(image))
      );
      const imageUrls = responses.map((response) => response.secure_url);
      setFormState({
        ...formState,
        imageUrls,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        ref={register('name')}
        placeholder='Name'
        onChange={handleChange}
      />
      <input
        type='email'
        ref={register('email')}
        placeholder='Email'
        onChange={handleChange}
      />
      <input
        type='file'
        multiple
        ref={register('images')}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
