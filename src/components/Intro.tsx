import React from "react";
import Navbar from "./Navbar";

const Intro = () => {
  return (
    <div className={`h-[80vh] w-full py-12 px-20 text-white bg-mainBg`}>
      <Navbar />
      <div
        className={`h-[50vh] w-[90%] mt-10 mx-auto grid grid-cols-12 gap-x-20`}
      >
        <div
          className={`h-full col-span-6 flex flex-col justify-between items-start`}
        >
          <p className={`text-6xl font-semibold leading-snug`}>
            Authority Building Branding
          </p>

          <p className={`text-[25px] font-semibold`}>
            Bring impact to your brand through powerful strategies created just
            for <span className={`text-[#f04828]`}>YOU</span>.
          </p>

          <button className={`py-2 px-6 text-[#fff] rounded-md bg-[#5E17EB]`}>
            Let&apos;s Chat
          </button>
        </div>

        <div
          className={`h-full pt-4 px-4 col-span-6 flex justify-center items-center`}
        >
          <div
            className={`h-full w-full flex justify-center items-center bg-[#d9d9d9]`}
          >
            <p className={`text-black text-4xl font-semibold`}>Video Element</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
