import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';
import { formatPrice } from '@/utils/formatPrice';
import HomeCard from '../HomeCard';

interface PostsProps {
  data: Accommodation;
  yes?: boolean;
}

function Posts({ data }: PostsProps) {
  return (
    <HomeCard
      category={data.category}
      id={data._id}
      bath={data.bath}
      images={data.images}
      location={data.location}
      price={data.price}
      size={400}
      rooms={data.room}
      title={data.type}
    />
  );
}

export default Posts;
