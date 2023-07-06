"use client";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

const FaqContent = ({ title, description }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`w-full xxs:w-[420px] sm:w-[450px] md:w-[500px] flex flex-col justify-start items-start gap-2 text-black bg-[#fff]`}>
      <div className={`w-full flex justify-between items-center gap-x-4 xxs:gap-x-0`}>
        <p className={`text-base xs:text-lg font-semibold`}>{title}</p>
        {isOpen ? (
          <AiOutlineMinus
            className={`text-3xl xs:text-2xl cursor-pointer`}
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <MdAdd
            className={`text-3xl xs:text-2xl cursor-pointer`}
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      <p
        className={`text-sm text-[#929494] ${
          isOpen
            ? "visible max-h-[100px] mb-4 opacity-1 z-[1]"
            : "invisible max-h-0 mb-0 opacity-0 z-[-1]"
        } transition-all`}
      >
        {description}
      </p>
    </div>
  );
};

export default FaqContent;
