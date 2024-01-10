import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';

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
    <html className='scrollbar-hide' lang='en' suppressHydrationWarning={true}>
      <body className='bg-[#F1F3F4] dark:bg-[#1A1C29]'>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
