'use client'

import React from "react";
import socialMediaImg from "../../public/assets/socialMedia.jpg";
import Image from "next/image";
import checkImg from "../../public/assets/check.png";
import logos from "../../public/assets/logos.png";
import hubSPot from "../../public/assets/hubSpot.svg";
import Pr from "../../public/assets/premierPro.svg";
import Ps from "../../public/assets/photoshop.svg";
import Ae from "../../public/assets/afterEffects.svg";
import loom from "../../public/assets/Loom.svg";
import zoho from "../../public/assets/zoho.svg";
import airtable from "../../public/assets/airtable.png";
import drive from "../../public/assets/googleDrive.svg";
import sideAsset1 from "../../public/assets/sideAsset1.png";
import sideAsset2 from "../../public/assets/sideAsset2.png";

const TechStacks = () => {
  return (
    <div
      className={`relative h-auto w-full py-12 px-6 sm:px-12 md:px-20 bg-[#fff] z-[-1]`}
    >
      <div className={`absolute bottom-[0px] md:bottom-[80px] left-0 xl1:left-[120px] z-[-1]`}>
        <div
          className={`relative h-[200px] w-[200px] md_link:h-[300px] md_link:w-[300px] lg1:h-[350px] lg1:w-[350px] -rotate-12`}
        >
          <Image src={sideAsset1} alt="Side Asset 1" fill />
        </div>
      </div>

      <div
        className={`absolute bottom-[400px] sm:bottom-[320px] md:bottom-[250px] md_link:bottom-[150px] xl1:bottom-[120px] 
      right-0 sm:right-[20px] md_link:right-0 xl1:right-[100px] z-[-1]
      rotate-6`}
      >
        <div
          className={`relative h-[250px] w-[250px] md_link:h-[320px] md_link:w-[320px] lg1:h-[400px] lg1:w-[400px] xl1:h-[450px] xl1:w-[450px] rotate-12`}
        >
          <Image src={sideAsset2} alt="Side Asset 1" fill />
        </div>
      </div>

      <div
        className={`min-h-[20vh] sm:min-h-[30vh] md_link:min-h-[40vh] lg:min-h-[45vh] lg1:min-h-[50vh] xl1:min-h-[55vh] 
        w-full lg:w-[95%] lg1:w-[90%] xl1:w-[85%] mx-auto 
        grid grid-cols-12 gap-y-8 md_link:gap-x-12 z-[1]`}
      >
        <div
          className={`relative h-[40vh] xs:h-[50vh] sm:h-[60vh] md_link:h-full col-span-12 md_link:col-span-6 rounded-lg`}
        >
          <Image
            src={socialMediaImg}
            alt="Social Media"
            fill
            className={`rounded-3xl`}
          />
        </div>

        <div
          className={`h-full col-span-12 md_link:col-span-6 flex flex-col justify-start md_link:justify-center items-center md_link:items-start`}
        >
          <div className={`w-full sm:w-[95%] md:w-[85%] md_link:w-full`}>
            <div
              className={`mb-4 flex flex-col justify-start items-start gap-2`}
            >
              <p className={`text-xl xs:text-2xl sm:text-2xl md:text-3xl font-semibold`}>
                Let us be a part of your startup journey!
              </p>
              <p className={`text-sm text-[#818181] font-semibold`}>
                We make brands unlock their full potential!
              </p>
            </div>

            <div
              className={`mb-6 flex flex-col justify-start items-start gap-4`}
            >
              <div className={`flex justify-start items-start gap-2`}>
                <div className={`relative h-6 w-6 xxs:h-5 xxs:w-5`}>
                  <Image src={checkImg} alt="Check" fill />
                </div>
                <p className={`text-[#424242] font-[500] leading-4`}>
                  Expertly designed content to drive high-intent demand.
                </p>
              </div>

              <div className={`flex justify-start items-start gap-2`}>
                <div className={`relative h-6 w-6 xxs:h-5 xxs:w-5`}>
                  <Image src={checkImg} alt="Check" fill />
                </div>
                <p className={`text-[#424242] font-[500] leading-4`}>
                  Position yourself as an authority to turn traffic into leads.
                </p>
              </div>

              <div className={`flex justify-start items-start gap-2`}>
                <div className={`relative h-6 w-6 xxs:h-5 xxs:w-5`}>
                  <Image src={checkImg} alt="Check" fill />
                </div>
                <p className={`text-[#424242] font-[500] leading-4`}>
                  Create an audience base & drive demand to your brand.
                </p>
              </div>
            </div>
            <p className={`text-[#424242] font-[500]`}>
              Depending on the sector, target audience and , The Social Triangle
              crafts your content that is designed to tell your startup story in
              the best way possible to your audience.
            </p>
          </div>
        </div>
      </div>

      <div className={`mt-12 flex flex-col justify-center items-center`}>
        <p
          className={`text-lg xs:text-xl sm:text-2xl text-center sm:text-start text-[#5e17eb] font-semibold`}
        >
          Partners & Tech Stacks
        </p>
        <p
          className={`text-2xl xs:text-3xl sm:text-4xl text-center sm:text-start text-[#5e17eb] font-bold`}
        >
          Powerful Ecosystem
        </p>
        <p
          className={`my-4 text-black  text-center sm:text-start font-semibold`}
        >
          We use the best of tools to make your experience smooth and efficient
        </p>

        <div className={`flex flex-col justify-center items-center gap-8 md:gap-4 md_link:gap-0`}>
          <div
            className={`flex flex-col sm:flex-row justify-start items-center gap-4`}
          >
            <div className="relative h-12 w-[320px]">
              <Image src={logos} alt="Logos" fill />
            </div>

            <div className="relative h-10 w-[100px] md:w-[150px]">
              <Image src={hubSPot} alt="HubSpot" fill />
            </div>
          </div>

          <div
            className={`grid grid-cols-2 xxxs:grid-cols-4 justify-center items-center gap-4`}
          >
            <div className="relative h-10 w-[50px]">
              <Image src={Pr} alt="Premier Pro" fill />
            </div>

            <div className="relative h-10 w-[50px]">
              <Image src={Ps} alt="Photoshop" fill />
            </div>

            <div className="relative h-10 w-[50px]">
              <Image src={Ae} alt="AfterEffects" fill />
            </div>

            <div className="relative h-20 w-[100px] md:w-[120px]">
              <Image src={loom} alt="Loom" fill />
            </div>
          </div>

          <div
            className={`grid grid-cols-2 xxxs:grid-cols-3 justify-center items-center gap-4`}
          >
            <div className="relative h-20 w-[120px]">
              <Image src={zoho} alt="Zoho" fill />
            </div>

            <div className="relative h-10 w-[120px]">
              <Image src={airtable} alt="Airtable" fill />
            </div>

            <div className="relative h-20 w-[120px]">
              <Image src={drive} alt="Google Drive" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
