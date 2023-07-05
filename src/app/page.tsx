import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import TechStacks from "@/components/TechStacks";

export default function Home() {
  return (
    <div className={`w-full`}>
      <Intro />
      <TechStacks />
      <Footer />
    </div>
  );
}
