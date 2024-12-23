import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-gray-50 px-4 py-16 md:py-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 rounded-full blur-xl"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/6a254c4f-fffc-4db8-b978-bdc2dc79ba05.png"
                alt="Nsikak Udoh"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>
          
          <div className="text-center space-y-6 max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-nsikak-primary"
            >
              Nsikak Udoh
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                Tech Entrepreneur & Social Impact Innovator
              </p>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                From healthcare to tech, building solutions that create meaningful change in communities
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="bg-gradient-to-r from-nsikak-primary to-nsikak-secondary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto"
              >
                See My Journey
              </a>
              <a 
                href="#contact" 
                className="border-2 border-nsikak-primary text-nsikak-primary px-8 py-3 rounded-lg hover:bg-nsikak-primary hover:text-white transition-colors duration-300 shadow-sm hover:shadow-md text-lg w-full sm:w-auto"
              >
                Let's Collaborate
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};