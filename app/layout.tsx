import { ReactNode } from 'react';

import Header from '../components/Header';
import './globals.css';
import Menu from '@/components/Menu';

export const metadata = {
  title: 'Book Store',
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&f[]=satoshi@400&display=swap" rel="stylesheet" />
      </head>

      <body className={`relative flex flex-col min-h-[100dvh] text-neutral-900 bg-neutral-100`}>
        <Header />
        <div className="relative">
          {children}
          <Menu />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;