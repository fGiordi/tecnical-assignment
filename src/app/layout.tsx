import Header from '@/Layouts/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Technical Assignment',
  description: 'Challenge'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col w-full min-h-full bg-[#f8fafc]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
