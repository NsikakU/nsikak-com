import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToVentures = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const venturesSection = document.getElementById('ventures');
    if (venturesSection) {
      venturesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-nsikak-primary mb-6"
            >
              Nsikak Udoh
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Tech Entrepreneur & Social Impact Innovator
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-x-4"
            >
              <a 
                href="#ventures" 
                onClick={scrollToVentures}
                className="bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300 inline-block shadow-sm hover:shadow-md"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-nsikak-primary text-nsikak-primary px-8 py-3 rounded-lg hover:bg-nsikak-primary hover:text-white transition-colors duration-300 inline-block shadow-sm hover:shadow-md"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img 
              src="/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png"
              alt="Nsikak Udoh"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};