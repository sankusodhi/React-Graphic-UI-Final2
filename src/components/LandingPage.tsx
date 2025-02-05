
// "use client";

// import { motion } from 'framer-motion';

// export default function LandingPage() {
//   return (
//     <div className="flex items-center justify-center h-full sm:h-[400px]  bg-[#1600ea] w-full overflow-x-hidden sm:px-6 md:px-20 p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="text-center"
//       >
//         <h1 className="text-white text-4xl md:text-6xl mb-8  sm:px-60 sm:leading-relaxed">
//           Unlock your Potential to get noticed among Top 1% ventures!
//         </h1>
//         <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-4 md:space-y-0">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="bg-yellow-500 text-black px-6 py-3 rounded font-medium sm:w-full md:w-auto"
//           >
//             Book a Demo
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="hover:bg-white border-white text-white hover:text-black px-6 py-3 rounded font-medium border-2 sm:w-full md:w-auto"
//           >
//             Sign up
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[300px] h-[300px] bg-[#1600ea] w-full px-4 sm:px-6 md:px-16 lg:px-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-screen-lg"
      >
        <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 leading-tight">
          Unlock your Potential to get
          <p className="mt-1 sm:mt-2">noticed among Top 1% ventures!</p>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-5 py-2.5 text-base font-medium rounded-md w-full sm:w-auto"
          >
            Book a Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:bg-white border-white text-white hover:text-black px-7 py-2.5 text-base font-medium border-2 rounded-md w-full sm:w-auto"
          >
            Sign up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
