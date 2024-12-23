import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-nsikak-background">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-nsikak-primary mb-6"
          >
            Hi, I'm Nsikak
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-nsikak-text mb-8"
          >
            Building digital experiences that matter
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};