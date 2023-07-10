'use client'

import React from "react";
import Navbar from "./Navbar";
import socialImg from "../../public/assets/social_media.jpg";
import Image from "next/image";

const Intro = ({letsChatRef}:any) => {
  
  const scrollToLetsChat = ()=> {
    letsChatRef?.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className={`min-h-[80vh] w-full py-12 px-6 sm:px-12 md:px-20 text-white bg-mainBg`}>
      <Navbar scrollToLetsChat={scrollToLetsChat} />
      <div
        className={`lg:h-[40vh] lg1:h-[45vh] xl1:h-[50vh] 
        w-full lg:w-[95%] xl1:w-[90%] mt-16 md_link:mt-10 mx-auto 
        grid grid-cols-12 gap-y-10 md_link:gap-x-20`}
      >
        <div
          className={`h-full col-span-12 md_link:col-span-6 flex flex-col justify-between items-center md_link:items-start gap-6 md_link:gap-0`}
        >
          <p className={`text-3xl sm:text-4xl lg:text-4xl lg1:text-5xl xl1:text-6xl text-center md_link:text-start  font-semibold leading-snug`}>
            Authority Building Branding
          </p>

          <p className={`text-[18px] sm:text-[20px] lg:text-[20px] lg1:text-[23px] xl1:text-[25px] text-center md_link:text-start font-semibold`}>
            Bring impact to your brand through powerful strategies created just
            for <span className={`text-[#f04828]`}>YOU</span>.
          </p>

          <button className={`py-3 px-6 text-[#fff] rounded-md bg-[#5E17EB]`} onClick={scrollToLetsChat}>
            Let&apos;s Chat
          </button>
        </div>

        <div
          className={`h-[50vh] md_link:h-full pt-4 px-4 col-span-12 md_link:col-span-6 flex justify-center items-center`}
        >
          <div
            className={`relative h-full w-full flex justify-center items-center rounded-2xl`}
          >
            <Image src={socialImg} alt="Social" fill className="rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
