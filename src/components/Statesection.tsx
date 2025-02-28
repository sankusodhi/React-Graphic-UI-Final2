
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { label: "Social media creative projects completed to date", value: "20K+" },
    { label: "Social media creative projects completed to date", value: "1900+" },
    { label: "Social media creative projects completed to date", value: "30K+" },
    { label: "Social media creative projects completed to date", value: "4.8/5" },
  ];

  return (
    <section className="bg-[#7B23FD] w-full text-white py-20 px-6">
      {/* Heading */}
      <motion.h2 
        className="text-[48px] md:text-[60px] font-Helvetica font-normal lg:text-[72px]  text-center  mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Designera is best for your business
      </motion.h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl  mx-auto text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="flex justify-between items-center border-t border-white/50   py-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className=" w-full text-[18px] md:text-[20px] lg:text-[18px] text-left ">{stat.label}</p>
            
            <h3 className=" text-[48px] md:text-[56px] lg:text-[64px] font-extrabold ">{stat.value}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
