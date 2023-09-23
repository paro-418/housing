import HeaderPage from '@/components/Header/page';
import './globals.css';
import type { Metadata } from 'next';
import FooterPage from '@/components/Footer/page';
import StickyNavigation from '@/components/StickyNavigation/page';
import ScrollButton from '@/components/ScrollButton/page';

export const metadata: Metadata = {
  title: 'Housing',
  description: 'A leading company in real estates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={` w-screen min-h-screen overflow-x-hidden`}>
        <HeaderPage />
        <StickyNavigation />
        {children}
        <FooterPage />
        <ScrollButton />
      </body>
    </html>
  );
}
