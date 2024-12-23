import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ventures } from "@/components/Ventures";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Ventures />
      <Contact />
    </div>
  );
};

export default Index;