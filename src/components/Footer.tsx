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
      className="bg-white font-Arimo font-normal text-gray-800 border-t border-gray-200 px-6 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Columns */}
        {[
          { title: "PLATFORM", links: ["Text 1", "Text 2", "Text 3", "Text 5", "Text 6"] },
          { title: "DESIGN SERVICES", links: ["Content Writing", "Graphic Design", "Video Production", "Commercial Ads", "Product Design", "Packaging Design", "UI-UX Design", "Launch a Brand"] },
          { title: "MARTECH SERVICES", links: ["Custom Web Development", "Performance Marketing", "Lead-Gen Funnel", "Technical SEO", "Market Research & Survey", "Social Media Marketing", "Campaign Planning", "WhatsApp/Email Marketing"] },
          { title: "MEDIA SERVICES", links: ["Media Planning & Buying", "Influencer Marketing", "Event Marketing", "Customer Relations"] },
          { title: "RESOURCES", links: ["Blogs", "Case Studies", "Our Work", "E-books", "Events", "Creators Hub", "Global Designers", "Help Center"] },
        ].map((section, idx) => (
          <div key={idx} className="flex flex-col"> {/* Removed `hidden sm:flex` */}
            <h5 className="text-lg font-semibold mb-4 text-[#997200]">{section.title}</h5>
            <ul className="text-base space-y-2">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-sky-600 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      <div className="container mx-auto flex flex-wrap justify-between py-6 border-t border-[#192138c9] gap-6 text-center sm:text-left">
        <div>
          <h5 className="text-lg font-semibold mb-2 text-[#997200]">COMPANY</h5>
          <p className="mb-2">About Us</p>
          <a href="#" className="text-white hover:underline border border-[#1600ea] bg-[#1600ea] rounded px-4 py-2">Join Team</a>
        </div>
        <div className="relative -left-8 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-32">
          <h5 className="text-lg font-semibold mb-2 text-[#997200]">ADDRESS</h5>
          <p className="hover:text-sky-800 cursor-pointer">Address</p>
        </div>

        <div>
          <h5 className="text-lg font-semibold mb-2 text-[#997200]">GET IN TOUCH</h5>
          <p>Please connect with us at</p>
          <p className="mb-2">+91-XXXXXXXXXX</p>
          <p>or Write us at <a href="mailto:EMAIL" className="text-sky-600">EMAIL</a></p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-2 text-[#997200]">SOCIAL</h5>
          <div className="flex space-x-4">
            {[FaInstagram, FaLinkedin, FaXTwitter, FaFacebookSquare].map((Icon, i) => (
              <Icon key={i} className="text-black text-2xl cursor-pointer hover:text-sky-600" />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between text-center text-sm border-t border-[#192138c9]">
        <p className="text-gray-600">© 2024, Name Inc. All Rights Reserved.</p>
        <div className="flex space-x-4">
          {["Terms of Service", "Privacy Policy", "Sitemap"].map((text, i) => (
            <a key={i} href="#" className="text-[#1700ea6d] hover:underline">{text}</a>
          ))}
        </div>
        <p className="text-gray-600">A Proud <span className="text-[#1700ea6d]">🇮🇳 Design Agency</span>.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;

