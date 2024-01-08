import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Disney+ Clone',
  description:
    'Created for personal front-end portfolio of Oleg Nosyrev (https://github.com/ymmy1/)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-white dark:bg-[#1A1C29]'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
