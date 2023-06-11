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
          h-screen
          flex
          justify-center
          items-center
          mx-auto
          shadow-lg rounded-lg 
          '>
      {children}
    </div>
  );
}
