import HeaderPage from '@/components/Header/page';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FooterPage from '@/components/Footer/page';

const inter = Inter({ subsets: ['latin'] });

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
      <body
        className={`border-2 border-red-600 w-screen min-h-screen overflow-x-hidden`}
      >
        <HeaderPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
