


"use client";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center lg:h-[400px] h-[300px] bg-[#1600ea] w-full px-4 sm:px-6 md:px-16 lg:px-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-screen-lg"
      >
        <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl  mb-1 font-normal font-Helvetica text-[60px]  leading-tight">
          Unlock your Potential to get
          <p className="mt-1 sm:mt-2">noticed among Top 1% ventures!</p>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full lg:py-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-5 py-2.5 text-base rounded-sm font-semibold  w-full lg:w-[180px]"
          >
            Book a Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-white border-white text-white rounded-sm hover:text-black px-7 py-2.5 text-base border-2 w-full lg:w-[180px] font-semibold"
          >
            Sign up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
