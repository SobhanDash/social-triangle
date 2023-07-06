import React from "react";
import FaqContent from "./FaqContent";

const Faqs = () => {
  return (
    <div
      className={`w-full py-20 px-6 sm:px-12 md:px-20 flex flex-col justify-start items-center bg-[#fff]`}
    >
      <p className={`text-xl xs:text-2xl text-[#5E17EB] font-semibold`}>Popularly Asked</p>
      <p className={`mt-2 mb-6 text-2xl xs:text-3xl text-[#5E17EB] text-center xs:text-start font-bold`}>
        FAQs For Our Marketing Agency
      </p>

      <div className={`flex flex-col justify-start items-start gap-2 sm:gap-4`}>
        <FaqContent
          title={`What services does your agency provide?`}
          description={`To put it simply, we help you manage, create and grow your social media handles. We also help you with email marketing, online advertising, content marketing. We expertise in Instagram, LinkedIn & Youtube, hence the name The Social Triangle.`}
        />

        <FaqContent
          title={`How much does our services cost?`}
          description={`To put it simply, we help you manage, create and grow your social media handles. We also help you with email marketing, online advertising, content marketing. We expertise in Instagram, LinkedIn & Youtube, hence the name The Social Triangle.`}
        />

        <FaqContent
          title={`Why you should hire a marketing agency?`}
          description={`To put it simply, we help you manage, create and grow your social media handles. We also help you with email marketing, online advertising, content marketing. We expertise in Instagram, LinkedIn & Youtube, hence the name The Social Triangle.`}
        />
      </div>
    </div>
  );
};

export default Faqs;
