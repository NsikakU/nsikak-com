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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4 py-16 md:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="text-center md:text-left w-full md:w-1/2 space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-nsikak-primary"
            >
              Nsikak Udoh
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600"
            >
              Tech Entrepreneur & Social Impact Innovator
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start"
            >
              <a 
                href="#ventures" 
                onClick={scrollToVentures}
                className="bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300 shadow-sm hover:shadow-md text-lg"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-nsikak-primary text-nsikak-primary px-8 py-3 rounded-lg hover:bg-nsikak-primary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md text-lg"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <img 
              src="/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png"
              alt="Nsikak Udoh"
              className="rounded-2xl shadow-xl w-full max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};