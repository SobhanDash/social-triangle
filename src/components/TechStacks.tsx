import React from "react";
import socialMediaImg from "../../public/assets/socialMedia.jpg";
import Image from "next/image";
import checkImg from "../../public/assets/check.png";
import { FaBeer } from "react-icons/fa";

const TechStacks = () => {
  return (
    <div className={`w-full py-12 px-20 bg-[#fff]`}>
      <div className={`h-[50vh] w-[85%] mx-auto grid grid-cols-12 gap-12`}>
        <div className={`relative h-full col-span-6 rounded-lg`}>
          <Image
            src={socialMediaImg}
            alt="Social Media"
            fill
            className={`rounded-3xl`}
          />
        </div>

        <div
          className={`h-full col-span-6 flex flex-col justify-center items-start`}
        >
          <div className={`mb-4 flex flex-col justify-start items-start gap-2`}>
            <p className={`text-3xl font-semibold`}>
              Let us be a part of your startup journey!
            </p>
            <p className={`text-sm text-[#818181] font-semibold`}>
              We make brands unlock their full potential!
            </p>
          </div>

          <div className={`mb-6 flex flex-col gap-2`}>
            <div className={`flex justify-start items-center gap-2`}>
              <div className={`relative h-5 w-5`}>
                <Image src={checkImg} alt="Check" fill />
              </div>
              <p className={`text-[#424242] font-[500]`}>
                Expertly designed content to drive high-intent demand.
              </p>
            </div>

            <div className={`flex justify-start items-center gap-2`}>
              <div className={`relative h-5 w-5`}>
                <Image src={checkImg} alt="Check" fill />
              </div>
              <p className={`text-[#424242] font-[500]`}>
                Position yourself as an authority to turn traffic into leads.
              </p>
            </div>

            <div className={`flex justify-start items-center gap-2`}>
              <div className={`relative h-5 w-5`}>
                <Image src={checkImg} alt="Check" fill />
              </div>
              <p className={`text-[#424242] font-[500]`}>
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
  );
};

export default TechStacks;
