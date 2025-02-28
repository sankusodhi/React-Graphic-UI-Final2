import { motion } from 'framer-motion';
// import { SiAdobe } from "react-icons/si";

import Logo_slider from "./Logo_slider";

function HeroSection() {
  return (
    <motion.section className="bg-[#070324] py-8 px-4 sm:py-12 sm:px-8">
      <div className="flex flex-col-reverse sm:flex-row justify-around items-center text-white h-[455px]w-[1142px]">
        <div className="mt-8 sm:mt-16 text-center sm:text-left lg:mr-24 sm:ml-0 translate-x-[18px]">
         
          <motion.h1
            className="text-4xl font-Arimo font-normal  sm:text-5xl lg:text-[60px] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-2 font-Helvetica">Driving Sales</p>
            <p className="mb-2 font-Helvetica">and Capturing</p>
            <p className="mb-2 font-Helvetica">Attention Through</p>
            <span className="text-yellow-400 font-Helvetica">Graphic Designs</span>
          </motion.h1>
          <motion.ul
            className="text-lg md:text-xl mb-6 py-3 leading-relaxed list-disc list-inside lg:ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li className="mb-2">On-board the Top 1% Design Talent.</li>
            <li className="mb-2">Communicate your brand’s story.</li>
            <li>Impactful Marketing Collateral.</li>
          </motion.ul>
          <motion.button
            className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-7 mt-4 sm:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.div
          className="w-full sm:w-1/2 lg:w-2/5 flex justify-center sm:justify-end "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/header-x.svg"
            alt="Hero Image"
            className="w-full h-full max-w-sm sm:max-w-md lg:max-w-lg lg:mt-8"
          />
        </motion.div>
      </div>
      {/* <div className="text-white flex justify-center sm:justify-end items-center space-x-4 text-4xl mt-10 sm:mt-10 md:mt-24 sm:ml-0 translate-x-[20px]">
        <SiAdobe className="w-9 h-9 " />
        <span className="text-3xl font-ubuntu">Adobe</span>
      </div> */}

<div className='mt-16 md:mx-20'>  <Logo_slider  /></div>
     
    </motion.section>
  );
}

export default HeroSection;
