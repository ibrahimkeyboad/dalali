import { Metadata } from 'next';
import NavProfile from './_components/NavProfile';

export const metadata: Metadata = {
  title: 'Profile Page',
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen '>
      <NavProfile />
      <section className='p-3 w-full'>{children}</section>
    </main>
  );
}

export default layout;
