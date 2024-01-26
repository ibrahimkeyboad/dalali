import './globals.css';

import { Poppins } from 'next/font/google';
import ToasterProvider, { ThemeProvider } from '@/providers/ToasterProvider';
import ReduxProvider from '@/providers/ReduxProvider';
import { Metadata } from 'next';
import FilterModal from '@/components/modal/FilterModal';
import QueryProviders from '@/providers/react-query';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Click and get it',
  description: 'Find better place to live',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='sw' data-theme='light'>
      <body className={poppins.className}>
        <ToasterProvider />
        <QueryProviders>
          <ReduxProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              {children}
              <FilterModal />
            </ThemeProvider>
          </ReduxProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
