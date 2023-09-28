import React from 'react';

type Props = {};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`dark:bg-[#112240] p-3 my-4 bg-white rounded-sm divide-y`}>
      {children}
    </div>
  );
};

export default Card;
