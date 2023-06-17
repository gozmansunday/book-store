"use client";

import { AnimatePresence, motion } from "framer-motion";

import Hero from "./Hero";
import Marquee from "@/components/marquee/Marquee";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-16 xs:space-y-20 md:space-y-24"
      >
        <Hero />
        <Marquee />
        <div className="py-6" />
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;