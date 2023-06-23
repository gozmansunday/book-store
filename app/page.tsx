"use client";

import { AnimatePresence, motion } from "framer-motion";

import Hero from "@/components/homepage/Hero";
import Categories from "@/components/homepage/Categories";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-10"
      >
        <Hero />
        <Categories />
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;