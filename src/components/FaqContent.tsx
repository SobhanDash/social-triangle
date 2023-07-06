"use client";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

const FaqContent = ({ title, description }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full xxs:w-[420px] sm:w-[450px] md:w-[500px] flex flex-col justify-start items-start gap-2 text-black bg-[#fff]`}
    >
      <div
        className={`w-full flex justify-between items-center gap-x-4 xxs:gap-x-0`}
      >
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

      {isOpen && <p className={`mb-4 text-sm text-[#929494]`}>{description}</p>}
    </div>
  );
};

export default FaqContent;
