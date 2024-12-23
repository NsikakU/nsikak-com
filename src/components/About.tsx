import { motion } from "framer-motion";

export const About = () => {
  const journeySteps = [
    {
      title: "Healthcare Insights",
      description: "Started in healthcare, experiencing firsthand the need for accessible technology solutions in essential services",
      icon: "🏥"
    },
    {
      title: "Tech Evolution",
      description: "Transformed into a tech enabler, focusing on democratizing technology for democratic campaigns and social impact organizations",
      icon: "💻"
    },
    {
      title: "Empowerment Focus",
      description: "Founded SPARKNERDS to bridge the tech gap, creating tools that enable organizations to move faster independently",
      icon: "🚀"
    },
    {
      title: "Community Impact",
      description: "Built Turtleback Coworking, fostering a space where grassroots innovation meets practical implementation",
      icon: "🏢"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-[#F2FCE2]/20 to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#9b87f5] mb-8 text-center">Bridging The Tech Gap</h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
              My journey from healthcare to tech has been marked by continuous transformation and growth, shaping my ability to bridge the technology gap—understanding organizational challenges and crafting effective solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#9b87f5]/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-[#9b87f5] mb-2">{step.title}</h3>
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
                "My mission is to empower organizations with practical tech solutions that enable self-sufficiency and faster growth. It's not just about solving problems - it's about enabling others to solve their own."
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};