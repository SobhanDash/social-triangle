import React from "react";
import Image from "next/image";
import iconImg from "../../public/assets/icon.png";

const Footer = () => {
  return (
    <div className={` w-full py-6 px-20 flex justify-between items-start bg-mainBg`}>
        <div className={`flex flex-col justify-start items-start gap-6`}>
            <div className={`flex justify-start items-end gap-2`}>
                <div className={`relative h-8 w-8`}>
                <Image src={iconImg} alt="Icon" fill />
                </div>
                <p className={`text-2xl text-[#fff] font-semibold`}>The Social Triangle</p>
            </div>

            <p className={`w-[400px] py-2 px-4 font-[500] bg-[#d9d9d9]`}>
                Add Social Media Icons in this space for LinkedIn, Instagram, twitter, medium, facebook
            </p>

            <p className={`text-[#A1A1A1]`}>
                Copyright © All Rights Reserved. 2023
            </p>
        </div>

        <div className={`flex flex-col justify-start items-start gap-3`}>
            <p className={`text-[#fff] text-2xl font-semibold`}>Learn</p>

            <div className={`text-[#A1A1A1] flex flex-col gap-2`}>
                <p>Free Resources</p>
                <p>Case Studies</p>
                <p>About Us</p>
            </div>
        </div>
    </div>
  );
};

export default Footer;
