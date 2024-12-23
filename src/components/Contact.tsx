import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-nsikak-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsikak-primary mb-6">Get in Touch</h2>
          <p className="text-lg text-nsikak-text mb-8">
            Interested in working together? Let's connect.
          </p>
          <a
            href="mailto:contact@nsikak.com"
            className="inline-block bg-nsikak-primary text-white px-8 py-3 rounded-lg hover:bg-nsikak-secondary transition-colors duration-300"
          >
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
};