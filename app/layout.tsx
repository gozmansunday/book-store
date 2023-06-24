import { ReactNode } from 'react';
import localFont from 'next/font/local';

import Header from '@/components/Header';
import './globals.css';
import NavMenu from '@/components/navigation/NavMenu';
import { ade, clash, hubot, mona, neue } from '@/lib/fontConfig';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Book Store',
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const fontVariables = `${ade.variable} ${clash.variable} ${hubot.variable} ${mona.variable} ${neue.variable}`;

  return (
    <html lang="en" className={`${fontVariables}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap" rel="stylesheet" />
      </head>

      <body className={`relative flex flex-col min-h-[100dvh] space-y-10 font-hubot  text-neutral-800 bg-neutral-100 z-0`}>
        <Header />
        <div className="relative bg-neutral-100 z-20">
          {children}
          <NavMenu />
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;