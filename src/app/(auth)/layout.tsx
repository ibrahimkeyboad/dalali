import { Metadata } from 'next';
import style from './signup.module.css';

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
        className={`${style.signupSection} shadow-xl shadow-gray-200 dark:shadow-none`}>
        {children}
      </section>
    </>
  );
}
