import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Ventures } from "@/components/Ventures";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Ventures />
      <Contact />
    </main>
  );
};

export default Index;