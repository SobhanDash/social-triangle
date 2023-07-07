"use client";

import React from "react";
import FaqContent from "./FaqContent";

const Faqs = () => {
  return (
    <div
      className={`w-full py-20 px-6 sm:px-12 md:px-20 flex flex-col justify-start items-center bg-[#fff]`}
    >
      <p className={`text-xl xs:text-2xl text-[#5E17EB] font-semibold`}>
        Popularly Asked
      </p>
      <p
        className={`mt-2 mb-6 text-2xl xs:text-3xl text-[#5E17EB] text-center xs:text-start font-bold`}
      >
        FAQs For Our Marketing Agency
      </p>

      <div className={`flex flex-col justify-start items-start gap-2 sm:gap-4`}>
        <FaqContent
          title={`What services does your agency provide?`}
          description={`To put it simply, we help you manage, create and grow your social media handles. We also help you with email marketing, online advertising, content marketing. We expertise in Instagram, LinkedIn & Youtube, hence the name The Social Triangle.`}
        />

        <FaqContent
          title={`How much does our services cost?`}
          description={`Our pricing depends on the specific services and needs of each client. We offer customized packages tailored to the budget and goals of our clients. Book a meeting to get a custom quote for your marketing needs.`}
        />

        <FaqContent
          title={`Why you should hire a marketing agency?`}
          description={[`Marketing agencies help companies to implement their marketing strategies. They offer a wide array of services such as – marketing strategy, website, content creation, design, social media management, search engine marketing (SEM), search engine optimization (SEO), and more.`,
          
          `Finding the right agency for your marketing needs is very crucial. The right agency could become your growth partner that helps you achieve your business goals swiftly.`,

          `Because of their expertise in the online marketing space, marketing agencies can help you identify the most viable channels to increase leads and conversions. The strategise and implement marketing strategies that best suit your needs.`,

          `A marketing agency can help you save loads of time and money. The marketing experts know what works and what doesn’t. This will help you save a lot of extra hours of experimentation.`,
          `And they create and implement marketing ideas that work best for your business. You don’t have to spend any extra money on hiring those highly skilled marketing professionals.`,
          
          `The marketing space is highly dynamic and evolving. You need to stay updated about the latest martech in order to be competitive. As a business owner, this might be difficult. Hiring a marketing agency can solve this problem for you. They know of the latest marketing technologies and have expertise in the implementation.`]}
        />
      </div>
    </div>
  );
};

export default Faqs;
