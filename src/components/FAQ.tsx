// // "use client";

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const questions = [
// //   { id: 1, question: 'Question', answer: 'Answer' },
// //   { id: 2, question: 'Question', answer: 'Answer' },
// //   { id: 3, question: 'Question', answer: 'Answer' },
// //   { id: 4, question: 'Question', answer: 'Answer' },
// //   { id: 5, question: 'Question', answer: 'Answer' },
// //   { id: 6, question: 'Closed Question Example', answer: '' },
// // ];

// // export default function FAQ() {
// //   // Explicitly define state type as number or null
// //   const [openQuestion, setOpenQuestion] = useState<number | null>(null);

// //   // Ensure 'id' parameter has a defined type
// // const toggleQuestion = (id: number) => {
// //   setOpenQuestion(openQuestion === id ? null : id);
// // };

// //   return (
// //     <div className="w-full mx-auto pt-16 px-4 sm:px-6 pb-16 md:px-28 bg-[#ffffff]">
// //       <h1 className="text-6xl  text-start mb-6">
// //         Resolve your Doubts here.
// //       </h1>
// //       <ul className="space-y-8 sm:pt-14 sm:text-5xl">
// //         {questions.map(({ id, question, answer }) => (
// //           <li key={id} className="border-b">
// //             <div
// //               className="flex items-center text-center justify-between py-2  cursor-pointer"
// //               onClick={() => toggleQuestion(id)}
// //             >
// //               <span className="text-lg mb-8 font-semibold  break-words sm:text-3xl">
// //                 {id}. {question}
// //               </span>
// //               <button className="text-white font-bold text-xl text-center sm:text-3xl lg:text-3xl rounded-full w-10 h-10 bg-[#1600ea] t">
// //                 {openQuestion === id ? '×' : '+'}
// //               </button>
// //             </div>
// //             <AnimatePresence>
// //               {openQuestion === id && (
// //                 <motion.div
// //                   initial={{ opacity: 0, height: 0 }}
// //                   animate={{ opacity: 1, height: 'auto' }}
// //                   exit={{ opacity: 0, height: 0 }}
// //                   className="overflow-hidden"
// //                 >
// //                   <p className="py-2 mb-4 px-4 text-gray-600 text-sm sm:text-lg lg:text-lg">
// //                     {answer}
// //                   </p>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const questions = [
//   { id: 1, question: 'Question', answer: 'Answer' },
//   { id: 2, question: 'Question', answer: 'Answer' },
//   { id: 3, question: 'Question', answer: 'Answer' },
//   { id: 4, question: 'Question', answer: 'Answer' },
//   { id: 5, question: 'Question', answer: 'Answer' },
//   { id: 6, question: 'Closed Question Example', answer: '' },
// ];

// export default function FAQ() {
//   // Explicitly define state type as number or null
//   const [openQuestion, setOpenQuestion] = useState<number | null>(null);
//   const [activeButton, setActiveButton] = useState('candidates');

//   const handleClick = (button: string) => {
//     setActiveButton(button);
//   };
  
//   // Ensure 'id' parameter has a defined type
// const toggleQuestion = (id: number) => {
//   setOpenQuestion(openQuestion === id ? null : id);
// };

//   return (
//     <div className="w-full mx-auto pt-16 px-4 sm:px-6 pb-16 md:px-28 bg-[#ffffff]">
//       <h1 className="text-6xl  text-start mb-6">
//         Resolve your Doubts here.
//       </h1>
//       <ul className="space-y-8 sm:pt-14 sm:text-5xl">
//         {questions.map(({ id, question, answer }) => (
//           <li key={id} className="border-b">
//             <div
//               className="flex items-center text-center justify-between py-2  cursor-pointer"
//               onClick={() => toggleQuestion(id)}
//             >
//               <span className="text-lg mb-8 font-semibold  break-words sm:text-3xl">
//                 {id}. <span className=' sm:ml-12 translate-x-[20px]'> {question}</span>
//               </span>

//               <div
//               className={`cursor-pointer px-2 ${activeButton === 'candidates' ? 'text-[#1600ea] border-b-4 border-blue-600' : 'text-gray-400 border-b-2 border-transparent'}`}
//               onClick={() => handleClick('candidates')}
//             >

//               <button className={`text-xl text-center sm:text-3xl lg:text-3xl sm:mb-10 text-[#1600ea] rounded-full w-14 h-14 border hover:text-white border-[#1600ea] hover:bg-[#1600ea] t `}>
//                 {openQuestion === id ? '×' : '+'}
//               </button>
//             </div>
              
//             </div>
//             <AnimatePresence>
//               {openQuestion === id && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: 'auto' }}
//                   exit={{ opacity: 0, height: 0 }}
//                   className="overflow-hidden"
//                 >
//                   <p className="py-2 mb-4 px-4 text-gray-600 text-sm sm:text-lg lg:text-lg">
//                     {answer}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }




"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { id: 1, question: 'Question', answer: 'Answer' },
  { id: 2, question: 'Question', answer: 'Answer' },
  { id: 3, question: 'Question', answer: 'Answer' },
  { id: 4, question: 'Question', answer: 'Answer' },
  { id: 5, question: 'Question', answer: 'Answer' },
  { id: 6, question: 'Closed Question Example', answer: '' },
];

export default function FAQ() {
  // Explicitly define state type as number or null
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Ensure 'id' parameter has a defined type
  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="w-full mx-auto pt-16 px-4 sm:px-6 pb-16 md:px-28 bg-[#ffffff]">
      <h1 className="text-6xl text-start mb-6">
        Resolve your Doubts here.
      </h1>
      <ul className="space-y-8 sm:pt-14 sm:text-5xl">
        {questions.map(({ id, question, answer }) => (
          <li key={id} className="border-b">
            <div
              className="flex items-center text-center justify-between py-2 cursor-pointer"
              onClick={() => toggleQuestion(id)}
            >
              <span className="text-lg mb-8 font-semibold break-words sm:text-3xl">
                {id}. <span className="sm:ml-12 translate-x-[20px]">{question}</span>
              </span>
              <button
                className={`text-[#1600ea] text-xl text-center border-[#1600ea] border sm:text-3xl lg:text-3xl sm:mb-10 rounded-full w-14 h-14 ${openQuestion === id ? 'bg-[#1600ea] text-white' : 'bg-white'} t`}
              >
                {openQuestion === id ? '×' : '+'}
              </button>
            </div>
            <AnimatePresence>
              {openQuestion === id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="py-2 mb-4 px-4 text-gray-600 text-sm sm:text-lg lg:text-lg">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>

  );
}