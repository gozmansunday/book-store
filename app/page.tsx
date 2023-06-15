"use client";

import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-1"
      >
        {/* Hero Section */}
        <section className="font-clash text-3xl text-center capitalize xs:text-4xl md:text-6xl">
          Discover The World&apos;s Finest Fiction Books
        </section>
      </motion.main>
    </AnimatePresence>
  );
};

export default Home;