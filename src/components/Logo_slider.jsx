import React from 'react'
import Slider from "react-slick";
import { SiAdobe } from "react-icons/si";


const Logo_slider = () => {
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 9, // Default for large screens
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1280, // For screens below 1280px (Large screens)
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1024, // For screens below 1024px (Tablets)
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768, // For screens below 768px (Small tablets)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480, // For screens below 480px (Mobile)
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};



  return (
    <div>
      <div className="slider-container text-white text-center ">
        <Slider {...settings}>
          <div className="size-16 pr-5">
            <div className="text-white flex justify-center sm:justify-end items-center space-x-4 text-4xl">
              <SiAdobe className="size-16 " />
              <span className="text-3xl font-ubuntu">Adobe</span>
            </div>
          </div>
          <div className="size-16">
            <img
              className="h-full w-[120px] rounded-lg"
              src="/pic-14.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/pic-24.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/pic-26.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto rounded-lg"
              src="/pic-25.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px]"
              src="/assets/park+.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px]"
              src="/assets/adani_logo.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full  w-[120px] rounded-lg"
              src="/assets/Screenshot 2025-01-04 145058.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="size-16 flex justify-center items-center">
            <img
              className="h-full w-auto ml-14 rounded-lg"
              src="/pic-27.png"
              alt=""
              srcset=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Logo_slider
