"use client";

import React from "react";
import Image from "next/image";
import iconImg from "../../public/assets/icon.png";
import { BsLinkedin, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={`w-full py-10 px-6 sm:px-12 md:px-20 
        flex flex-col md_link:flex-row gap-y-10 md_link:gap-y-0 justify-between items-start 
        bg-mainBg bg-cover bg-center bg-no-repeat`}
    >
      <div className={`flex flex-col justify-start items-start gap-6`}>
        <div className={`flex justify-start items-end gap-2`}>
          <div className={`relative h-8 w-8`}>
            <Image src={iconImg} alt="Icon" fill />
          </div>
          <p className={`text-2xl text-[#fff] font-semibold`}>
            The Social Triangle
          </p>
        </div>

        <div className={`flex justify-start items-start gap-4`}>
          <Link
            href="https://www.linkedin.com/company/thesocialtriangle/"
            target="_blank"
          >
            <BsLinkedin className={`text-2xl  text-[#fff]`} />
          </Link>

          <Link
            href="https://www.instagram.com/the.socialtriangle/"
            target="_blank"
          >
            <BsInstagram className={`text-2xl  text-[#fff]`} />
          </Link>

          <Link href="https://twitter.com/tSocialTriangle/" target="_blank">
            <BsTwitter className={`text-2xl  text-[#fff]`} />
          </Link>

          <Link href="https://medium.com/@thesocialtriangle/" target="_blank">
            <FaMedium className={`text-2xl  text-[#fff]`} />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100093863242419"
            target="_blank"
          >
            <BsFacebook className={`text-2xl  text-[#fff]`} />
          </Link>
        </div>

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
