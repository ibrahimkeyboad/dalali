import getUsers from '@/actions/getUsers';
import React from 'react';

async function Page() {
  const users = await getUsers();
  return (
    <div className='text-white'>
      {users.map((user) => (
        <h2 key={`${user._id}`}> {user.name}</h2>
      ))}
    </div>
  );
}

export default Page;
