import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Ventures } from "@/components/Ventures";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Ventures />
      <Contact />
    </main>
  );
};

export default Index;