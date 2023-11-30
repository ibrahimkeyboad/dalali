import React from 'react';

import { Skeleton } from '../ui/skeleton';

function NavSkeleton() {
  return (
    <div className='flex gap-10 p-2'>
      <Skeleton className='py-3 px-14' />
      <Skeleton className='py-3 px-14' />
      <Skeleton className='py-3 px-14' />
      <Skeleton className='py-3 px-14' />
      <Skeleton className='py-3 px-14' />
      <Skeleton className='py-3 px-14' />
    </div>
  );
}

export default NavSkeleton;
