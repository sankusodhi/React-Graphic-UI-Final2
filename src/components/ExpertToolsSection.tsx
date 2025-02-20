
import { motion } from "framer-motion";

const ExpertToolsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.2 },
  };

  return (
    <motion.section
      className="bg-[FFF9E8] text-center py-6 sm:py-10 lg:py-14 sm:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-xl sm:text-3xl md:text-5xl font-Arimo font-normal lg:text-7xl text-black mb-4 sm:mb-6 lg:mb-8"
        variants={itemVariants}
      >
        Expertly Crafted with <br /> the Latest Tools
      </motion.h2>
      <motion.div
        // className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 ml-10 justify-center"
        className="flex flex-wrap justify-center mt-10 items-center sm:gap-7 mb-8 sm:mb-16 cursor-pointer "
        // className="flex gap-4 sm:gap-8 pt-10  m-5 justify-center"
        // <div className="flex flex-wrap justify-center mt-10 items-center sm:gap-20 gap-12 mb-8 sm:mb-16 cursor-pointer sm:mr-16"></div>
        variants={containerVariants}
      >
        {[
            { src: "/assets/Adobe-Lightroom-24px.svg", alt: "Invision" },
             { src: "/assets/AI.svg", alt: "Adobe Illustrator" },
          { src: "/assets/Adobe-Photoshop-24px.svg", alt: "Lightroom" },
           { src: "/assets/after-effects.svg", alt: "Notion" },
          { src: "/pic-27.png",  alt: "After Effects" },
          { src: "/pic-26.png", alt: "Figma" },
          { src: "/pic-25.png", alt: "Craft" },
          { src: "/pic-24.png", alt: "Other Tool" },
          { src: "/pic-28.png", alt: "Photoshop" },
        ].map((tool, index) => (
          <motion.div
            key={index}
            className="w-20 h-16 text-black flex flex-wrap items-center justify-center  gap-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <img className="sm:h-20  sm:max-w-20 gap-12 " src={tool.src} alt={tool.alt} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ExpertToolsSection;

