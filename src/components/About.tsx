import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsikak-primary mb-6">About Me</h2>
          <p className="text-lg text-nsikak-text leading-relaxed mb-8">
            I'm a passionate professional dedicated to creating meaningful digital solutions. 
            With expertise in modern technologies, I focus on delivering high-quality results 
            that make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {["Vision", "Innovation", "Excellence"].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-nsikak-primary mb-2">{value}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};