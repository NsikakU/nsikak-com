import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsikak-primary mb-8 text-center">My Journey</h2>
          
          <div className="space-y-6 text-lg text-nsikak-text leading-relaxed">
            <p>
              As a Nigerian immigrant and former pharmacy technician, my journey has been one of continuous transformation and growth. Today, I'm a software engineer and entrepreneur dedicated to creating positive social impact through technology and innovation.
            </p>
            
            <p>
              My experience spans from healthcare to democratic campaign technology consulting with Digidems, where I've helped shape digital strategies for political clients. This diverse background has given me a unique perspective on using technology to solve real-world problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-nsikak-primary mb-2">Innovation</h3>
                <p className="text-sm">Building solutions that bridge technology and social impact</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-nsikak-primary mb-2">Community</h3>
                <p className="text-sm">Creating spaces and opportunities for entrepreneurs to thrive</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-nsikak-primary mb-2">Impact</h3>
                <p className="text-sm">Driving positive change through technology and entrepreneurship</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};