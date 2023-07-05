import React from "react";
import Image from "next/image";
import Link from "next/link";
import iconImg from "../../public/assets/icon.png";

const Navbar = () => {
  return (
    <div
      className={`w-[90%] mx-auto flex justify-between items-center bg-transparent`}
    >
      <div className={`flex justify-start items-end gap-2`}>
        <div className={`relative h-10 w-10`}>
          <Image src={iconImg} alt="Icon" fill />
        </div>
        <p className={`text-3xl font-semibold`}>The Social Triangle</p>
      </div>

      <div className={`flex justify-start items-center gap-4`}>
        <Link
          href={`#`}
          className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
        >
          HOME
        </Link>
        <Link
          href={`#`}
          className={`p-2 hover:border-b border-b-[#5E17EB] transition-all`}
        >
          ABOUT
        </Link>
        <button
          className={`py-2 px-4 border border-[#5E17EB] hover:bg-[#5E17EB] rounded-md transition-all`}
        >
          <Link href={`#`}>BOOK A CALL</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
