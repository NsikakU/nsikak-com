import { motion } from "framer-motion";

export const About = () => {
  const journeySteps = [
    {
      title: "Healthcare Roots",
      description: "Started as a pharmacy technician, discovering the potential of technology in healthcare",
      icon: "🏥"
    },
    {
      title: "Tech Evolution",
      description: "Transitioned to software engineering, working with democratic campaigns and social impact solutions",
      icon: "💻"
    },
    {
      title: "Entrepreneurial Growth",
      description: "Founded SPARKNERDS and created ImpactFlow to empower nonprofits through technology",
      icon: "🚀"
    },
    {
      title: "Community Building",
      description: "Established Turtleback Coworking, creating spaces for entrepreneurs to thrive",
      icon: "🏢"
    }
  ];

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
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
              Starting as a pharmacy technician, I discovered my passion for technology and its potential to create meaningful change in communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-nsikak-primary mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <blockquote className="text-xl italic text-gray-600 max-w-3xl mx-auto">
                "These experiences weren't just stepping stones - they shaped my understanding of technology, user needs, and community impact."
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};