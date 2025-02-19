import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-[#ffffff] font-Arimo font-normal  text-gray-800 border-t border-gray-200 sm:px-28"
    >
      <div className="container mx-auto px-4 sm:pr-14 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div className="hidden lg:flex lg:flex-col cursor-pointer sm:ml-[-19px]">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">PLATFORM</h5>
          <ul className="gap-2 transform -translate-x-[1px] text-[15px]">
            <li className="mb-2 hover:text-sky-600"><p>Text 1</p></li>
            <li className="mb-2 hover:text-sky-600"><p>Text 2</p></li>
            <li className="mb-2 hover:text-sky-600"><p>Text 3</p></li>
            <li className="mb-2 hover:text-sky-600">Text 5</li>
            <li>Text 6</li>
          </ul>
          <h5 className="text-[15px] font-semibold mt-6 mb-4 text-[#997200] transform -translate-x-[1px]">
            YET TO BE DECIDED
          </h5>
          <ul className="transform -translate-x-[1px] text-[15px]">
            <li className="mb-2 hover:text-sky-600">Text 1</li>
            <li className="hover:text-sky-600">Text 2</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="cursor-pointer hidden lg:flex lg:flex-col">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">DESIGN SERVICES</h5>
          <ul className=" transform -translate-x-[1px] text-[15px]">
            <li className="mb-4 hover:text-sky-600">Content Writing</li>
            <li className="mb-4 hover:text-sky-600">Graphic Design</li>
            <li className="mb-4 hover:text-sky-600">Video Production</li>
            <li className="mb-4 hover:text-sky-600">Commercial Ads</li>
            <li className="mb-4 hover:text-sky-600">Product Design</li>
            <li className="mb-4 hover:text-sky-600">Packaging Design</li>
            <li className="mb-4 hover:text-sky-600">UI-UX Design</li>
            <li className="hover:text-sky-600">Launch a Brand</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="cursor-pointer hidden lg:flex lg:flex-col sm:ml-4">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200] ">MARTECH SERVICES</h5>
          <ul className="text-[15px]">
            <li className="mb-4 hover:text-sky-600"><p>Custom Web Development</p></li>
            <li className="mb-4 hover:text-sky-600 ">Performance Marketing</li>
            <li className="mb-4 hover:text-sky-600">Lead-Gen Funnel</li>
            <li className="mb-4 hover:text-sky-600">Technical SEO</li>
            <li className="mb-4 hover:text-sky-600">Market Research & Survey</li>
            <li className="mb-4 hover:text-sky-600">Social Media Marketing</li>
            <li className="mb-4 hover:text-sky-600">Campaign Planning</li>
            <li className="hover:text-sky-600">WhatsApp/Email Marketing</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="cursor-pointer hidden lg:flex lg:flex-col sm:ml-16 sm:w-[400px]">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">MEDIA SERVICES</h5>
          <ul className="text-[15px]">
            <li className="mb-4 hover:text-sky-600">Media Planning & Buying</li>
            <li className="mb-4 hover:text-sky-600">Influencer Marketing</li>
            <li className="mb-4 hover:text-sky-600">Event Marketing</li>
            <li className="hover:text-sky-600">Customer Relations</li>
          </ul>
          <h5 className="text-[15px] font-semibold sm:mt-14 mb-4 text-[#997200]">TALENT NETWORK SERVICES</h5>
          <ul className="text-[15px]">
            <li className="mb-4 hover:text-sky-600">Get Hired</li>
            <li className="mb-4 hover:text-sky-600">Get Talent</li>
            <li className="hover:text-sky-600">Evaluate Creative Talent</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="cursor-pointer sm:transform sm:translate-x-[160px] hidden lg:flex sm:flex-col sm:mr-20">
          <h5 className="text-[15px] font-semibold text-[#997200] mb-4">RESOURCES</h5>
          <ul className="text-[15px]">
            <li className="mb-4 hover:text-sky-600">Blogs</li>
            <li className="mb-4 hover:text-sky-600">Case Studies</li>
            <li className="mb-4 hover:text-sky-600">Our Work</li>
            <li className="mb-4 hover:text-sky-600">E-books</li>
            <li className="mb-4 hover:text-sky-600">Events</li>
            <li className="mb-4 hover:text-sky-600">Creators Hub</li>
            <li className="mb-4 hover:text-sky-600">Global Designers</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      <div className=" flex justify-between flex-col md:flex-row md:justify-between pt-4 md:px-0 sm:mx-auto px-4 sm:py-6 border-t border-[#192138c9] ">
        {/* Company */}
        <div className="flex justify-between md:w-[25%]">
        <div className="">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">COMPANY</h5>
          <ul className="text-[15px]">
            <li className="mb-2">About Us</li>
            <p className="pb-4">Join our team</p>
            <li className="w-full">
              <a href="#" className="text-white w-full hover:underline border lg:min-w-10 border-[#1600ea] bg-[#1600ea] rounded lg:p-2 ">
                Join Team
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className=" sm:ml-12 translate-x-[20px]" >
          <h5 className="text-[15px] font-semibold mb-4  text-[#997200]">ADDRESS</h5>
          <p className="hover:text-sky-800 cursor-pointer text-[15px]">Address</p>
        </div>
        </div>

        <div className="flex justify-between pt-4 md:w-[36%]">
        {/* Get in Touch */}
        <div className=" text-center">
          <h5 className="text-[15px]  font-semibold mb-4 text-start text-[#997200]">GET IN TOUCH</h5>
          <div className="text-start text-[15px]">
          <p>Please connect with us at</p>
          <p className="mb-4">+91-XXXXXXXXXX</p>
          <p className="">
            or Write us at <a className="" href="mailto:EMAIL">EMAIL</a>
          </p>
          </div>
        </div>

        {/* Social Media */}
        <div className=" lg:mr-14 sm:ml-12 translate-x-[20px]">
          <h5 className="text-[15px] font-semibold mb-4 text-[#997200]">SOCIAL</h5>
          <ul className="flex space-x-4 text-center ">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaInstagram className="mr-2 text-black text-2xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaLinkedin className="mr-2 text-black text-2xl" />
              </a>
            </li>
          </ul>
          <ul className="flex space-x-4 mt-2 text-center ">
            <li>
              <a href="#" className="text-blue-600 hover:underline  items-center">
                <FaXTwitter className="md:mr-2 text-black text-2xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 ml-2 md:ml-0 hover:underline flex items-center">
                
                <FaFacebookSquare className="md:mr-2 text-black text-2xl" />
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>

      <div className="container mx-auto p-4 lg:p-0  py-4 lg:py-8 lg:flex lg:justify-between  border-t border-[#192138c9] lg:pb-10">
        <div className="flex justify-evenly  text-sm lg:justify-between lg:w-[38%]">
        <p className="text-sm text-[#1700ea6d] ">© 2024, Name Inc. All Rights Reserved.</p>
        <ul className="flex  space-x-4 text-start ">
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Sitemap
            </a>
          </li>
        </ul>
        </div>
        <div className="py-4 lg:py-0">
        <p className="text-sm text-gray-600 text-center">
          A Proud <span className="text-[#1700ea6d]">🇮🇳 Design Agency</span>.
        </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;