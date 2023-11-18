import './globals.css';

import { Inter } from 'next/font/google';
import ToasterProvider, { ThemeProvider } from '@/providers/ToasterProvider';
import FilterModal from '@/components/FilterModal';
import ReduxProvider from '@/providers/ReduxProvider';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dalai | Find place as easist as click',
  description: 'Find better place to live',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='sw' data-theme='night'>
      <body className={inter.className}>
        <ToasterProvider />
        <ReduxProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
            <FilterModal />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
