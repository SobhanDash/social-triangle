import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import IndustriesSectors from "@/components/IndustriesSectors";
import Intro from "@/components/Intro";
import LetsChat from "@/components/LetsChat";
import Services from "@/components/Services";
import TechStacks from "@/components/TechStacks";

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
