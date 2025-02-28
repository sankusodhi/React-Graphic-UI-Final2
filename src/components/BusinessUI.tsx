"use client";
import { motion } from "framer-motion";

function BusinessUI() {
  return (
    <div className="bg-[#120d23] text-white font-sans sm:px-16">
      <section className="text-center pt-20 py-12">
        <h1 className="text-4xl font-normal font-Helvetica sm:text-6xl mb-4 mt-8">
          How we are best for your business.
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-xl pt-12 pb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-6xl mt-4 sm:mt-0">$10M+ </h2>
            <p className="font-normal font-Helvetica">Revenue for Clients</p>
          </div>

          {/* Vertical Divider */}
          {/* <div className="hidden sm:block border-l-2 border-white h-24"></div> */}
          <div className="hidden sm:block border-l-2 h-24" style={{ borderColor: '#6c6a74' }}></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-6xl mt-4 sm:mt-0">1500+ </h2>
            <p className="font-normal font-Helvetica">Projects Delivered</p>
          </div>

          {/* Vertical Divider */}
          {/* <div className="hidden sm:block border-l-2 border-white h-24"></div> */}
          <div className="hidden sm:block border-l-2 h-24" style={{ borderColor: '#6c6a74' }}></div>

          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-6xl mt-4 sm:mt-0">10k+</h2>
            <p className="font-normal font-Helvetica">Expert Designers</p>
          </div>
        </div>

        {/* Horizontal Line */}
        {/* <hr className="max-w-[996px] w-[90%] mx-auto mb-8 border-t border-white px-4 sm:px-0" /> */}
        <hr
          className="max-w-[996px] w-[90%] mx-auto mb-8 border-t px-4 sm:px-0"
          style={{ borderColor: '#CECDD2' }}
        />

      </section>

      <section className="text-center py-12">
        <h2 className="text-4xl font-normal font-Helvetica sm:text-[60px] mb-24">
          Explore Perfect needs with Designera.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-12">
          {[
            {
              title: "Campaign Planning",
              img: "/pic-05.png", // Replace with the actual path
            },
            {
              title: "UX/UI Design",
              img: "/pic-06.png", // Replace with the actual path
            },
            {
              title: "Advertising",
              img: "/pic-07.png", // Replace with the actual path
            },
            {
              title: "Rebranding",
              img: "/pic-08.png", // Replace with the actual path
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-30 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusinessUI;

