import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-nsikak-background">
      <Navigation />
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default Index;