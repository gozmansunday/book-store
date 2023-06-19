'use client';

import { useMenuStore } from "@/hooks/useStore";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavMenu = () => {
  const [menuOpen, closeMenu] = useMenuStore((state) => [state.menuOpen, state.closeMenu]);

  const links = [
    { href: "/fiction", label: "Fiction" },
    { href: "/non-fiction", label: "Non-Fiction" },
    { href: "/bestsellers", label: "Bestsellers" },
  ];

  // Framer Motion
  const menuList = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.05 }
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
        className="fixed inset-0 bg-neutral-100"
      >
        <div className="flex flex-col items-end gap-4 font-ade text-2xl uppercase max-w-[96rem] mx-auto px-2 py-20 xs:gap-6 sm:gap-6 xs:text-4xl xs:py-24 md:py-32 md:text-6xl md:gap-8">
          {links.map((link) => (
            <Link onClick={closeMenu} key={link.href} className="transition duration-200 hover:text-primary hover:-translate-x-4" href={link.href}>
              <motion.div variants={itemList}>
                {link.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>}
    </AnimatePresence>
  );
};

export default NavMenu;