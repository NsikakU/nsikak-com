import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-nsikak-primary mb-6 text-center">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Interested in working together? Let's connect.
            </p>
            <div className="text-center">
              <a
                href="mailto:contact@nsikak.com"
                className="inline-block bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Send me an email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};