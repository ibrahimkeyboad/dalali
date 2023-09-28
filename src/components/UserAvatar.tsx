import Image from 'next/image';
import React from 'react';

type Props = {
  user?: User;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Image
      placeholder='blur'
      blurDataURL='/images/pisi.jpg'
      src='/images/pisi.jpg'
      className='rounded-full h-10 w-10 object-cover'
      alt={''}
      height={100}
      width={100}
      priority
    />
  );
};

export default UserAvatar;

//h-28 w-28
