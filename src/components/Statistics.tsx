

import { motion } from 'framer-motion';
// import {luArrowUpRight} from 'react-icons/lu';
import { LuArrowUpRight } from "react-icons/lu";

export default function BenefitSection() {
  return (

    <div className="bg-[#F9F5EC] text-white sm:py-4  sm:px-8 sm:pt-16">

      {/* Benefit Section */}
      {/* <div className="text-center mt-10"> */}
      <div className=" sm:ml-20 mt-12">
        <h2 className="text-3xl md:text-[63px] font-Helvetica text-black font-normal md:text-5xl p-3 text-center sm:text-start ">Designera will benefit you.</h2>
      </div>

      {/* Grid Section */}
      <div className=" md:grid-cols-2 p-6 lg:grid-cols-3 gap-8 md:p-20">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black  p-4 sm:p-0 rounded-lg shadow-lg lg:flex  lg::mx-28"
        >

          <div className='sm:w-[70%]  '>
            <h3 className="text-4xl font-normal font-Helvetica sm:mt-16  sm:px-14  ">Hire Us or On-board</h3>
            <h3 className="text-4xl font-normal font-Helvetica  sm:px-14  sm:mb-8">Top 1% Creative Talent ✨</h3>
            <p className="text-xl font-Arimo font-normal sm:px-14">
              Collaborate with our expert team for tailored, high-quality
              designs aligned with your brand’s goals, or onboard top
              creative talent for fresh perspectives. Our flexible approach
              ensures impactful, client-focused solutions that resonate
              with your audience.
            </p>
            <div className='p-6'>
              {/* <a href="#" className="text-[#1600ea] sm:px-8 sm:mt-16 font-medium">Hire Designers <LuArrowUpRight /> */}
              {/* <a href="#" className="text-[#1600ea] sm:px-8 sm:mt-16 font-Arimo font-normal">Hire Designera &#x2197;</a> */}
              {/* <a href="#" className="text-[#1600ea] sm:px-8 sm:mt-16 font-Arimo font-normal"><div>Hire Designera<LuArrowUpRight /></div></a> */}
              <a href="#" className="text-[#1600ea] text-md sm:px-8 font-Arimo font-normal flex items-center">
  Hire Designer
  <LuArrowUpRight className="ml-1 text-xl sm:text-2xl" />
</a>

            </div>
          </div>
          <div className="text-center pt-10 ">
            <img className='h-[380px] w-[1000px]'
              src="/pic-15.png"
              alt="Arjun Mehta"

            />

          </div>

        </motion.div>

        {/* Card 2 */}
        <div className='flex justify-evenly mt-12 sm:mt-0 w-full gap-5 md:gap-10 p-4 sm:p-0 '>
          <div className='lg:flex sm:justify-evenly  sm:mt-12 sm:w-full sm:gap-5 md:gap-10'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black   rounded-lg shadow-lg"
            >

              <div className=' mt-1 p-4 lg:p-0'>
                <h3 className="text-4xl font-normal font-Helvetica sm:mt-9  sm:px-14 mb-2">Creatives that</h3>
                <h3 className="text-4xl font-normal font-Helvetica sm:px-14 mb-2"> Drives Revenue 💵</h3>
                <p className="text-xl text-justify font-Arimo font-normal sm:px-14 ">
                  Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.
                </p>
                <div className='p-6'>
                  <a href="#" className="text-[#1600ea] flex sm:px-8 font-Arimo font-normal"> Know More 
  <LuArrowUpRight className="ml-1 text-xl sm:text-2xl" />

                  </a>
                </div>
              </div>
              <div className=" sm:px-14 ">

                <img className=' h-[345px] '
                  src="/pic-03.png"
                  alt="Arjun Mehta"


                />

              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black rounded-lg shadow-lg mt-10 lg:mt-0"
            >
              <div className='p-4 lg:p-0'>
                <h3 className="text-4xl font-normal font-Helvetica sm:mt-10 sm:px-14 mb-2">Top-notch quality, consistently delivered with excellence 😍</h3>
                <p className="text-xl font-Arimo font-normal sm:px-14">
                  Scale your content with precisely crafted visuals that ensure consistency
                  and lasting impact, seamlessly aligning with your brand to create engaging,
                  resonant results.
                </p>
                <div className='p-6'>

                  <a href="#" className="text-[#1600ea] sm:px-8 font-Arimo flex font-normal">Know More 
  <LuArrowUpRight className="ml-1 text-xl sm:text-2xl" />

                  </a>

                </div>
              </div>
              <div className="text-center sm:pl-14 ">

                <img className='rounded-lg'
                  src="/pic-17.png"
                  alt="Arjun Mehta"


                />

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
