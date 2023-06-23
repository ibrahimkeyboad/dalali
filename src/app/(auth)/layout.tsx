import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fungua account yako',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section
        className={`max-w-[1240px] py-20 m-auto my-[5%] shadow-xl shadow-gray-200 dark:shadow-none`}>
        {children}
      </section>
    </>
  );
}
