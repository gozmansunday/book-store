'use client';

import { useMenuStore } from "@/hooks/useStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Menu = () => {
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
    <AnimatePresence>
      {menuOpen && <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={menuList}
        className="fixed inset-0 flex flex-col items-end gap-4 font-ade text-3xl uppercase bg-neutral-100 container mx-auto px-1 py-16 xs:gap-6 sm:gap-8 xs:text-5xl xs:py-20 md:py-24 md:text-6xl md:gap-10"
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
  );
};

export default Menu;