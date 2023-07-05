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
    <div className={`relative w-full py-12 px-20 bg-[#fff]`}>

      <div className={`absolute bottom-[80px] left-[120px]`}>
        <div className={`relative h-[350px] w-[350px] -rotate-12`}>
          <Image src={sideAsset1} alt="Side Asset 1" fill />
        </div>
      </div>

      <div className={`absolute bottom-[150px] right-[100px] rotate-6`}>
        <div className={`relative h-[450px] w-[450px] rotate-12`}>
          <Image src={sideAsset2} alt="Side Asset 1" fill />
        </div>
      </div>

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

      <div className={`my-12 flex flex-col justify-center items-center`}>
        <p className={`text-2xl text-[#5e17eb] font-semibold`}>Partners & Tech Stacks</p>
        <p className={`text-4xl text-[#5e17eb] font-bold`}>Powerful Ecosystem</p>
        <p className={`my-4 text-black font-semibold`}>We use the best of tools to make your experience smooth and efficient</p>

        <div className={`flex flex-col justify-center items-center`}>
          <div className={`flex justify-start items-center gap-4`}>
            <div className="relative h-12 w-[320px]">
              <Image src={logos} alt="Logos" fill />
            </div>

            <div className="relative h-10 w-[150px]">
              <Image src={hubSPot} alt="HubSpot" fill />
            </div>
          </div>

          <div className={`flex justify-start items-center gap-4`}>
            <div className="relative h-10 w-[50px]">
              <Image src={Pr} alt="Premier Pro" fill />
            </div>

            <div className="relative h-10 w-[50px]">
              <Image src={Ps} alt="Photoshop" fill />
            </div>

            <div className="relative h-10 w-[50px]">
              <Image src={Ae} alt="AfterEffects" fill />
            </div>

            <div className="relative h-20 w-[120px]">
              <Image src={loom} alt="Loom" fill />
            </div>
          </div>

          <div className={`flex justify-start items-center gap-4`}>
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
