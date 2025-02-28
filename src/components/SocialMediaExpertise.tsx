import { FC } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

// Define a type for the platform data
interface Platform {
  icon: JSX.Element;
  name: string;
  description: string;
}

// Component
const SocialMediaExpertise: FC = () => {
  // List of platforms
  const platforms: Platform[] = [
    { icon: <FaFacebookF className="text-yellow-500 text-4xl mb-3" />, name: "Facebook", description: "Maximize engagement with custom creative tailored for Facebook’s unique audience and platform capabilities." },
    { icon: <FaLinkedinIn className="text-yellow-500 text-4xl mb-3" />, name: "LinkedIn", description: "Position your brand as an industry leader with professional and engaging content designed for LinkedIn’s business-focused community." },
    { icon: <FaInstagram className="text-yellow-500 text-4xl mb-3" />, name: "Instagram", description: "Captivate Instagram’s visually-driven audience with stunning graphics and innovative content formats." },
    { icon: <FaTiktok className="text-yellow-500 text-4xl mb-3" />, name: "TikTok", description: "Tap into the power of viral content with TikTok creatives designed for maximum shareability and engagement." },
    { icon: <FaYoutube className="text-yellow-500 text-4xl mb-3" />, name: "YouTube", description: "Optimize viewer interaction with tailored creatives designed for YouTube’s diverse audience and video-friendly platform features." },
    { icon: <BsFillGrid3X3GapFill className="text-yellow-500 text-4xl mb-3" />, name: "Other Platforms", description: "Have another platform in mind? We’re here for your team with a global team of presentation designers to tap into." }
  ];

  return (
    <div className="bg-white text-black">
      {/* Section 1: Social Media Expertise */}
      <div className="container mx-auto px-6 sm:px-16 py-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">
          Expertise Across all Social Media Platforms
        </h2>
        <p className="text-gray-600 text-center mt-3">
          Rely on our in-depth expertise, as well as the ability to version and scale any
          kind of social media content, static, motion, or video across your key social media channels.
        </p>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-center">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center">
              {platform.icon}
              <h3 className="text-lg font-semibold">{platform.name}</h3>
              <p className="text-gray-600 text-sm">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Shopify Testimonial */}
      <div className="bg-gray-100 py-12 px-6 sm:px-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center">
          {/* Left: Image */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
            <img src="/assets/shopify-user.jpg" alt="Shopify User" className="w-full h-full object-cover" />
          </div>

          {/* Right: Testimonial */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-lg font-semibold">
              <span className="text-black font-bold">Superside</span> makes it easy for Shopify’s Growth team to get design done well and fast. 
              <span className="text-black font-bold"> Their platform is intuitive and enables speed.</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">- Amir Jaffari, Growth Lead at Shopify</p>

            {/* Metrics */}
            <div className="flex justify-center sm:justify-start mt-6 space-x-8">
              <div>
                <p className="text-blue-600 text-3xl font-bold">250%</p>
                <p className="text-gray-600 text-sm">Increase in Click Rate</p>
              </div>
              <div>
                <p className="text-blue-600 text-3xl font-bold">192k+</p>
                <p className="text-gray-600 text-sm">Leads Generated with Creatives</p>
              </div>
            </div>
          </div>

          {/* Arrow Button */}
          <div className="hidden sm:block ml-6">
            <button className="p-3 bg-black text-white rounded-full hover:bg-gray-800">
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaExpertise;
