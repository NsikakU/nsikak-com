import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center">
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
            className="text-xl md:text-2xl text-nsikak-text mb-8 max-w-2xl mx-auto"
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
              className="bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300 inline-block"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-nsikak-primary text-nsikak-primary px-8 py-3 rounded-lg hover:bg-nsikak-primary hover:text-white transition-colors duration-300 inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};