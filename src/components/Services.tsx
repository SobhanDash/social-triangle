"use client";

import React from "react";
import { BiSolidVideos } from "react-icons/bi";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdEditSquare, MdOutlineManageAccounts } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { SiMicrostrategy } from "react-icons/si";
import {
  PiVideoThin,
  PiPenNibThin,
  PiShapesThin,
  PiRobotThin,
  PiScissorsThin,
  PiStrategyThin,
} from "react-icons/pi";

const Services = () => {
  return (
    <div
      className={`w-full py-20 px-6 sm:px-12 md:px-20 flex flex-col justify-start items-center gap-y-8 bg-[#fff]`}
    >
      <p
        className={`text-3xl text-[#5E17EB] font-semibold border-b-[2px] border-[#F04828]`}
      >
        Our Services
      </p>

      <div
        className={`w-full md_link:w-[85%] lg:w-[80%] grid grid-cols-1 xs:grid-cols-2 md_link:grid-cols-3 gap-4 xs:gap-6 md:gap-8`}
      >
        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiVideoThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>
              Video Content
            </p>
            <p className={`text-[#100F0D] text-center`}>
              Stand out with custom videos
            </p>
          </div>
        </div>

        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiPenNibThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>
              Copywriting
            </p>
            <p className={`text-[#100F0D] text-center`}>
              Leverage content to build authority
            </p>
          </div>
        </div>

        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiShapesThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>Management</p>
            <p className={`text-[#100F0D] text-center`}>
              Get freed from tedious work
            </p>
          </div>
        </div>

        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiRobotThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>Automation</p>
            <p className={`text-[#100F0D] text-center`}>
              Save time & money with automation
            </p>
          </div>
        </div>

        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiScissorsThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>Editing</p>
            <p className={`text-[#100F0D] text-center`}>
              Delegate content editing to experts
            </p>
          </div>
        </div>

        <div
          className={`p-[1.5px]`}
          style={{
            background: "linear-gradient(to bottom, #5E17EB, #F04828)",
          }}
        >
          <div
            className={`h-[200px] p-4 flex flex-col justify-center items-center gap-2 bg-[#fff]`}
          >
            <PiStrategyThin className={`text-8xl text-[#5E17EB]`} />
            <p className={`text-xl text-[#5E17EB] font-semibold`}>Strategies</p>
            <p className={`text-[#100F0D] text-center`}>
              Boost profits with proven strategies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
