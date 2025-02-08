import React from "react";
import Image from "next/image";

const MarketPlace = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-[40%] text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-[30px] font-bold text-[#041738] leading-snug sm:leading-9">
          Skills Challenges Program is built on the Umurava Talent Marketplace
          Platform
        </h2>
        <p className="text-[#2B3338] mt-6 sm:mt-8 text-lg sm:text-[15.5px] lg:text-[16.5px] font-normal leading-relaxed">
          A Project-based Learning Solution aimed at providing young and senior
          talents with an opportunity to showcase their skills to real-world
          projects and challenges from our partner companies and organizations.
        </p>
        <p className="text-[#2B3338] mt-4 sm:mt-6 text-lg sm:text-[15.5px] lg:text-[16.5px] font-normal leading-relaxed">
          Umurava Skills Challenges enables young talents to build a portfolio
          and experience that increases their readiness to access job
          opportunities and projects.
        </p>
        <button className="flex mt-6 sm:mt-8 px-6 sm:px-8 py-3 text-sm sm:text-base bg-[#2B71F0] text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none transition-all">
          Get Started
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/banner_img2.png"
          alt="Umurava Talent Marketplace UI"
          height={500}
          width={500}
          className="rounded-lg w-auto h-auto  object-cover max-h-[500px]"
        />
       
      </div>
    </div>
  );
};

export default MarketPlace;
