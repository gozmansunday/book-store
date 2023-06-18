"use client";

import { AnimatePresence, motion } from "framer-motion";

import Hero from "../components/homepage/Hero";
import Categories from "@/components/homepage/Categories";
import Bestsellers from "@/components/homepage/Bestsellers";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6 xs:space-y-8 md:space-y-12"
      >
        <Hero />
        <Categories />
        <Bestsellers />
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;