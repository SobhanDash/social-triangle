"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import iconImg from "../../public/assets/icon.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ scrollToLetsChat }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`lg:w-[95%] xl1:w-[90%] mx-auto flex flex-col justify-start items-start`}
    >
      <div
        className={`w-full py-2 flex justify-between items-center bg-transparent`}
      >
        <div className={`flex justify-start items-end gap-2`}>
          <div className={`relative h-8 w-8 md:h-10 md:w-10`}>
            <Image src={iconImg} alt="Icon" fill />
          </div>
          <p className={`text-2xl md:text-3xl font-semibold`}>
            The Social Triangle
          </p>
        </div>

        <div className={`hidden md_link:flex justify-start items-center gap-4`}>
          <Link
            href={`/`}
            className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
          >
            HOME
          </Link>
          {/* <Link
            href={`/about`}
            className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
          >
            ABOUT
          </Link> */}
          <button
            onClick={scrollToLetsChat}
            className={`py-2 px-4 border border-[#5E17EB] hover:bg-[#5E17EB] rounded-md transition-all`}
          >
            BOOK A CALL
          </button>
        </div>

        {showMenu ? (
          <AiOutlineClose
            className={`text-4xl md_link:hidden cursor-pointer`}
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <HiOutlineMenuAlt2
            className={`text-4xl md_link:hidden cursor-pointer`}
            onClick={() => setShowMenu(true)}
          />
        )}
      </div>

      <div
        className={`${
          showMenu ? "max-h-[170px] z-[1] opacity-1" : "max-h-0 z-[-1]"
        } 
        w-full flex md_link:hidden flex-col justify-start items-start gap-2 rounded-md transition-all`}
      >
        <Link
          href={`/`}
          className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
        >
          HOME
        </Link>
        {/* <Link
          href={`/about`}
          className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
        >
          ABOUT
        </Link> */}
        <button
          onClick={scrollToLetsChat}
          className={`py-2 px-4 border border-[#5E17EB] hover:bg-[#5E17EB] rounded-md transition-all`}
        >
          BOOK A CALL
        </button>
      </div>
    </div>
  );
};

export default Navbar;
