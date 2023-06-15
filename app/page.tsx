"use client";

import { AnimatePresence, motion } from "framer-motion";

import Hero from "./Hero";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero Section */}
        <Hero />
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;