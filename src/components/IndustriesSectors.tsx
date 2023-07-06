import React from "react";

const IndustriesSectors = () => {
  return (
    <div
      className={`relative min-h-[80vh] w-full py-20 px-6 sm:px-12 md:px-20
      before:absolute before:inset-0 before:z-[-1]
      before:bg-industriesBg before:bg-no-repeat before:bg-cover before:bg-center`}
    >
      <div className={`absolute inset-0 bg-[#0a0a0a7c] z-[-1]`}></div>
      <div className={`w-full lg:w-[95%] xl1:w-[90%] mx-auto text-white flex flex-col`}>
        <p className={`text-xl md:text-2xl font-bold`}>Who Hires us</p>
        <p className={`mt-8 mb-10 text-3xl md:text-4xl font-bold`}>Industries & Sectors</p>

        <div className={`w-full flex justify-start items-center gap-4 flex-wrap`}>
          <p
            className={`w-auto py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            SaaS
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            EdTech
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            FinTech
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            HealthTech
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            ClimateTech
          </p>
        </div>

        <div className={`mt-6 w-full flex justify-start items-center gap-4 flex-wrap`}>
          <p
            className={`w-auto py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Food & Beverages
          </p>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Coaching & Consultancy
          </p>
        </div>

        <div className={`mt-6 w-full flex justify-start items-center gap-4 flex-wrap`}>
          <p
            className={`py-2 px-8 border border-dashed border-[#fff] rounded-xl`}
          >
            Manufacturing
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
