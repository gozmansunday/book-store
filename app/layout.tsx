"use client";

import { ReactNode } from 'react';

import { AnimatePresence, motion } from "framer-motion";

import Header from '../components/Header';
import './globals.css';
import { useMenuStore } from '@/hooks/useStore';
import Link from 'next/link';

// export const metadata = {
//   title: 'Book Store',
// };

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  const [menuOpen, closeMenu] = useMenuStore((state) => [state.menuOpen, state.closeMenu]);

  const links = [
    {href: "/crime", label: "Crime"},
    {href: "/fantasy", label: "Fantasy"},
    {href: "/romance", label: "Romance"},
    {href: "/sci-fi", label: "Sci-Fi"},
    {href: "/horror", label: "Horror"},
  ];

  // Framer Motion
  const menuList = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 , delayChildren: 0.3, staggerChildren: 0.05 }
    },
  };

  const itemList = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    }
  };


  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@400&f[]=satoshi@400&display=swap" rel="stylesheet" />
      </head>

      <body className={`relative flex flex-col ${menuOpen ? "h-[100dvh] overflow-clip" : "min-h-[100dvh]"} text-neutral-900 bg-neutral-200`}>
        <Header />
        <div className="relative">
          {children}

          <AnimatePresence>
            {menuOpen && <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuList}
              className="absolute inset-0 bg-gradient-to-b from-white to-neutral-200 flex flex-col items-end gap-6 font-ade text-4xl uppercase container mx-auto px-1 py-4 xs:gap-8 sm:gap-10 xs:text-5xl xs:py-8 sm:py-10 md:text-7xl md:gap-12"
            >
              {links.map((link) => (
                <Link onClick={closeMenu} key={link.href} className="transition duration-200 hover:text-main-dark hover:-translate-x-4" href={link.href}>
                  <motion.div variants={itemList}>
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </motion.div>}
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;