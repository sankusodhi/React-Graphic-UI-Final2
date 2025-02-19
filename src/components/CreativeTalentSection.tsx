
import { useState } from 'react';
import { motion } from "framer-motion";
// import { section } from 'framer-motion/client';

const CreativeTalentSection = () => {
    const [activeButton, setActiveButton] = useState('candidates');

  const handleClick = (button: string) => {
    setActiveButton(button);
  };


  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.1 },
  };


  return (
    <>
    <section className='p-4'>
      <motion.div
          className=" text-center lg:text-left px-4 sm:px-[70px] sm:py-3 md:ml-6 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
            <div className='flex'>
              <div
              className={`cursor-pointer px-2 ${activeButton === 'candidates' ? 'text-[#1600ea] border-b-4 border-blue-600' : 'text-gray-400 border-b-2 border-transparent'}`}
              onClick={() => handleClick('candidates')}
            >
             <motion.div 
              variants={itemVariants}
            whileHover="hover"
              >
              <a href="/"
               
              >For Candidates</a>
              </motion.div>
              <hr />
            </div>
             <div
              // className={`cursor-pointer border-b-2 px-2 ${activeButton === 'enterprises' ? 'text-[#1600ea] border-b-4 border-blue-600' : 'text-gray-400 border-b-2 border-transparent'}`}
              className="cursor-pointer px-2 text-gray-400 border-gray-300 border-b-2 "
              // onClick={() => handleClick('enterprises')}
            >
              <motion.div 
              variants={itemVariants}
            whileHover="hover"
              >
              <a href="/"
               
              >For Enterprises</a>
              </motion.div>
              {/* <hr className='text-black' /> */}
            </div>
            </div>
      
      <div className='lg:flex lg:justify-between py-6'>
        <div className=" lg:w-[60%]  ">
           <h1 className=" text-4xl sm:text-5xl lg:text-6xl  mb-6 font-Arimo font-normal text-black tracking-wider">
             Scale your Teams
             <p>
             Faster by Hiring {" "}
             </p> 
             the
             <span className="text-[#1600ea]">Top 1%</span> Skilled
             <p>
              Creative
             Talent.
             </p>
           </h1>
           <p className="text-[#000000] lg:w-[65%] font-Arimo font-normal text-xl text-justify mb-6  pt-6">
             Join an exclusive talent pool and connect with leading brands
             searching for top creative professionals. Showcase your expertise,
             land your dream role, and redefine your career with endless
             opportunities.
           </p>
           <ul className="list-disc pl-8 text-xl font-Arimo font-normal md:w-[65%] text-[#000000] text-justify mb-6">
             <li>Get Placed with Top Brands Like Google and Amazon.</li>
             <li>Showcase Your Creative Talent to the World.</li>
             <li>Get Hired for Projects That Elevate Your Career.</li>
           </ul>
           <button className="px-6 py-3 md:mt-10 bg-[#1600ea] text-white font-semibold  hover:bg-blue-700">
             Become Talent
           </button>
           </div>
       <motion.div
          className=" mt-12 lg:mt-0 lg:w-[40%] px-6"
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
           <div className=" w-full h-full pt-1 rounded-lg  ">
             <img className="w-full h-full   " src="/pic-09.png" alt="Arjun Mehta" />
          </div>
         </motion.div>
      </div>
      </motion.div>
    </section>
    </>
  );
};

export default CreativeTalentSection;

//  <section className="py-12 bg-[#f9f4eb] md:pl-1 overflow-x-hidden lg:flex lg:justify-between w-full">
//       <div className="container mx-auto flex flex-col lg:justify-between lg:flex-row items-center ">
//         {/* Left Section */}
//         <motion.div
//           className="lg:w-1/2 text-center lg:text-left px-4 sm:px-7  sm:py-3"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="flex text-xl mb-4 justify-center  sm:justify-start">
//             <div
//               className={`cursor-pointer px-2 ${activeButton === 'candidates' ? 'text-[#1600ea] border-b-4 border-blue-600' : 'text-gray-400 border-b-2 border-transparent'}`}
//               onClick={() => handleClick('candidates')}
//             >
//              <motion.div 
//               variants={itemVariants}
//             whileHover="hover"
//               >
//               <a href="/"
               
//               >For Candidates</a>
//               </motion.div>
//               <hr />
//             </div>
//             <div
//               // className={`cursor-pointer border-b-2 px-2 ${activeButton === 'enterprises' ? 'text-[#1600ea] border-b-4 border-blue-600' : 'text-gray-400 border-b-2 border-transparent'}`}
//               className="cursor-pointer px-2 text-gray-400 border-gray-300 border-b-2 "
//               // onClick={() => handleClick('enterprises')}
//             >
//               <motion.div 
//               variants={itemVariants}
//             whileHover="hover"
//               >
//               <a href="/"
               
//               >For Enterprises</a>
//               </motion.div>
//               {/* <hr className='text-black' /> */}
//             </div>
//           </div>
//           <div className="sm:py-4">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl w-[90%] sm:w-[80%] mb-6 font-Arimo font-normal text-black leading-tight">
//             Scale your Teams
//             <p>
//             Faster by Hiring {" "}
//             </p> 
//             the
//             <span className="text-[#1600ea]">Top 1%</span> Skilled Creative
//             Talent.
//           </h1>
//           <p className="text-[#000000] font-Arimo font-normal text-xl text-justify mb-6 w-[90%] sm:w-[78%] pt-6">
//             Join an exclusive talent pool and connect with leading brands
//             searching for top creative professionals. Showcase your expertise,
//             land your dream role, and redefine your career with endless
//             opportunities.
//           </p>
//           <ul className="list-disc pl-8 text-xl font-Arimo font-normal  text-[#000000] text-justify mb-6">
//             <li>Get Placed with Top Brands Like Google and Amazon.</li>
//             <li>Showcase Your Creative Talent to the World.</li>
//             <li>Get Hired for Projects That Elevate Your Career.</li>
//           </ul>
//           <button className="px-6 py-3 bg-[#1600ea] text-white font-semibold  hover:bg-blue-700">
//             Become Talent
//           </button>
//           </div>
//         </motion.div>

//         {/* Right Section */}
//         <motion.div
//           className="lg:w-1/2 mt-12 lg:mt-0 px-6"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative md:h-[590px]  h-[400px] md:w-[560px] w-full pt-1 rounded-lg p-6 sm:mb-3 ">
//             <img className="w-full mt-9  h-full object-cover sm:ml-[12px] sm:mr-8" src="/pic-09.png" alt="Arjun Mehta" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
