import { ReactNode } from 'react';

import Header from './Header';
import './globals.css';

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

      <body className="flex flex-col min-h-[100dvh] text-light bg-noise bg-repeat bg-fixed bg-dark">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;