"use client";

import React from "react";

const IndustriesSectors = () => {
  return (
    <div
      className={`relative min-h-[80vh] w-full py-20 px-6 sm:px-12 md:px-20
      before:absolute before:inset-0 before:z-[-1]
      before:bg-industriesBg before:bg-no-repeat before:bg-cover before:bg-center`}
    >
      <div className={`absolute inset-0 bg-[#0a0a0a7c] z-[-1]`}></div>
      <div
        className={`w-full lg:w-[95%] xl1:w-[90%] mx-auto text-white flex flex-col`}
      >
        <p className={`text-xl md:text-2xl font-bold`}>Who Hires us</p>
        <p className={`mt-8 mb-10 text-3xl md:text-4xl font-bold`}>
          Industries & Sectors
        </p>

        <div
          className={`w-full flex justify-start items-center gap-4 flex-wrap`}
        >
          <p
            className={`w-auto py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            D2C
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            B2B & B2C
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Early Stage Startups
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Podcasters
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Influencers
          </p>
        </div>

        <div
          className={`mt-6 w-full flex justify-start items-center gap-4 flex-wrap`}
        >
          <p
            className={`w-auto py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Solopreneurs
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Coach & Consultants
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Freelancers
          </p>
        </div>

        <div
          className={`mt-6 w-full flex justify-start items-center gap-4 flex-wrap`}
        >
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Food & Beverages Brands
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Content Creators
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSectors;
