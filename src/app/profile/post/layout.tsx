import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fungua account yako',
};

interface props {
  children: React.ReactNode;
}

export default function StepsLayout({ children }: props) {
  return (
    <div className='max-w-[900px] my-[10%] mx-auto dark:bg-[#112240] shadow-lg rounded-lg bg-white p-8'>
      {children}
    </div>
  );
}
