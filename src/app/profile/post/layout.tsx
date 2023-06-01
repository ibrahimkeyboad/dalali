import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weka nyumba mpya',
};

interface props {
  children: React.ReactNode;
}

export default function StepsLayout({ children }: props) {
  return (
    <div
      className='
          max-w-[60rem] 
          my-[25vh]
          mx-auto
          dark:bg-[#112240] 
          shadow-lg rounded-lg 
          bg-white 
          p-8'>
      {children}
    </div>
  );
}
