import { motion } from "framer-motion";

export const Ventures = () => {
  const ventures = [
    {
      title: "SPARKNERDS",
      description: "Digital agency partnering with nonprofits to develop impactful websites that connect with their audience.",
      category: "Digital Agency"
    },
    {
      title: "ImpactFlow",
      description: "Streamlined website management subscription service for social impact organizations.",
      category: "SaaS"
    },
    {
      title: "Turtleback Coworking",
      description: "Community-focused shared workspace empowering entrepreneurs and small business owners.",
      category: "Community Space"
    },
    {
      title: "Practice Pulse",
      description: "AI-powered tools designed specifically for solo practitioners to streamline their practice.",
      category: "Technology"
    },
    {
      title: "Engage Volunteer Network",
      description: "Comprehensive platform connecting organizations with verified volunteers, simplifying volunteer management.",
      category: "Platform"
    }
  ];

  return (
    <section id="ventures" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nsikak-primary mb-4">My Ventures</h2>
          <p className="text-lg text-nsikak-text">Creating impact through innovation and technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <span className="text-sm text-nsikak-secondary font-medium mb-2 inline-block">
                  {venture.category}
                </span>
                <h3 className="text-xl font-semibold text-nsikak-primary mb-3">{venture.title}</h3>
                <p className="text-nsikak-text">{venture.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};