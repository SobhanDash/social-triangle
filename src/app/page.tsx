import dynamic from "next/dynamic";
import Faqs from "@/components/Faqs";
import IndustriesSectors from "@/components/IndustriesSectors";
import Intro from "@/components/Intro";
import LetsChat from "@/components/LetsChat";
import Services from "@/components/Services";
import TechStacks from "@/components/TechStacks";
const Footer = dynamic(()=> import("@/components/Footer"),{ssr: false});

export default function Home() {
  return (
    <div className={`w-full`}>
      <Intro />
      <TechStacks />
      <IndustriesSectors />
      <Services />
      <LetsChat />
      <Faqs />
      <Footer />
    </div>
  );
}
