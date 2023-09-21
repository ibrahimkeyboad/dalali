import './globals.css';

import { Inter } from 'next/font/google';
import ToasterProvider from '@/providers/ToasterProvider';
import UseClient from '@/components/UseClient';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dalai | Find place as easist as click',
  description: 'Find better place to live',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='night'>
      <body className={inter.className}>
        <ToasterProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}
