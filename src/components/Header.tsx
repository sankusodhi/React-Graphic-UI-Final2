
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuArrowUpRight } from "react-icons/lu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Platform", subItems: ["Overview", "Features", "Integrations"] },
    { name: "Solutions", subItems: ["Enterprise", "Small Business", "Startups"] },
    { name: "Resources", subItems: ["Blog", "Webinars", "Guides"] },
    { name: "Talent Network", subItems: ["Find Talent", "Join as Talent", "Case Studies"] },
  ];

  return (
    <motion.nav
      className="bg-[#0f0e24] border-b-2 border-[#262440] text-white px-6 py-4 lg:pl-60 flex justify-between items-center shadow-bottom-white relative z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Navigation Items */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name} className="group relative sm:ml-10">
            <span className="cursor-pointer flex items-center font-raleway text-md gap-2">
              {item.name}
              <span className="cursor-pointer">
                {/* SVG Arrow */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </span>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block bg-[#1e1c3d] py-2 mt-2 rounded shadow-lg">
              {item.subItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block px-4 py-2 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Right Navigation Buttons */}
      <div className="flex items-center space-x-4 w-full justify-between md:w-auto md:space-x-4">
        <a
          href="#"
          className="hidden md:inline-block border border-white px-4 py-1 hover:bg-white hover:text-[#0f0e24] transition"
        >
          <div className="flex items-center gap-2">
            <p>Hire Talent</p>
            <div className="text-2xl">
              <LuArrowUpRight />
            </div>
          </div>
        </a>

        <div className="flex w-full justify-between md:w-auto md:justify-normal">
          <a
            href="#"
            className="bg-[#1600ea] px-6 py-2 hover:bg-blue-500 transition md:ml-4"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-white ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <GiHamburgerMenu className="w-12 h-12" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-[#0f0e24] text-white flex flex-col space-y-4 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <span className="font-bold mb-2">{item.name}</span>
              {item.subItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block pl-4 py-1 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          ))}
          <a href="#" className="block border border-white px-4 py-2 rounded text-center">
            <div className="flex items-center justify-center gap-2">
              <p>Hire Talent</p>
              <LuArrowUpRight />
            </div>
          </a>
          <a href="#" className="block bg-blue-600 px-4 py-2 rounded text-center">Get Started</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
