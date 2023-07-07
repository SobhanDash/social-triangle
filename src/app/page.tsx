"use client"

import { useRef } from "react";
import dynamic from "next/dynamic";
import Faqs from "@/components/Faqs";
import IndustriesSectors from "@/components/IndustriesSectors";
import Intro from "@/components/Intro";
import LetsChat from "@/components/LetsChat";
import Services from "@/components/Services";
import TechStacks from "@/components/TechStacks";
const Footer = dynamic(()=> import("@/components/Footer"),{ssr: false});

export default function Home() {
  const letsChatRef = useRef(null);
  return (
    <div className={`w-full`}>
      <Intro letsChatRef={letsChatRef} />
      <TechStacks />
      <IndustriesSectors />
      <Services />
      <LetsChat letsChatRef={letsChatRef} />
      <Faqs />
      <Footer />
    </div>
  );
}
