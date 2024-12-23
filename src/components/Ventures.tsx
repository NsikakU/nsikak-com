import { motion } from "framer-motion";
import { Calendar, Gift, Clock, Sparkles } from "lucide-react";

export const Ventures = () => {
  const ventures = [
    {
      title: "SPARKNERDS",
      description: "Digital agency partnering with nonprofits to develop impactful websites that connect with their audience.",
      category: "Digital Agency",
      status: "Active",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "ImpactFlow",
      description: "Streamlined website management subscription service for social impact organizations.",
      category: "SaaS",
      status: "Active",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Turtleback Coworking",
      description: "Community-focused shared workspace empowering entrepreneurs and small business owners.",
      category: "Community Space",
      status: "Active"
    },
    {
      title: "Practice Pulse",
      description: "AI-powered tools designed specifically for solo practitioners to streamline their practice.",
      category: "Technology",
      status: "Active"
    },
    {
      title: "Engage Volunteer Network",
      description: "Comprehensive platform connecting organizations with verified volunteers, simplifying volunteer management.",
      category: "Platform",
      status: "Active"
    },
    {
      title: "Impact Real Estate Ventures",
      description: "Developing sustainable and affordable housing solutions to create positive community impact.",
      category: "Real Estate",
      status: "New Venture"
    },
    {
      title: "YayPalm",
      description: "Making ugly phone cases a distant memory through collaborations with independent artists worldwide. One of my first business ventures that helped understand market dynamics and user feedback importance.",
      category: "E-commerce",
      status: "Past Venture (2016)",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "GiftSpout",
      description: "Platform for hassle-free gifting through personalized recommendations. An early experiment that taught valuable lessons about customer experience and digital marketplace operations.",
      category: "E-commerce",
      status: "Past Venture",
      icon: <Gift className="w-6 h-6" />
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
          <p className="text-lg text-nsikak-text mb-8">Creating impact through innovation and technology - Past & Present</p>
          <blockquote className="italic text-gray-600 max-w-2xl mx-auto">
            "These early ventures weren't just businesses - they were stepping stones that shaped my understanding of technology, user needs, and community impact."
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 ${
                venture.status === "Past Venture" || venture.status === "Past Venture (2016)" 
                  ? "border-l-4 border-gray-300" 
                  : venture.status === "New Venture"
                  ? "border-l-4 border-green-500"
                  : "border-l-4 border-blue-500"
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {venture.icon}
                    <span className="text-sm text-nsikak-secondary font-medium">
                      {venture.category}
                    </span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    venture.status.includes("Past") 
                      ? "bg-gray-100 text-gray-600"
                      : venture.status === "New Venture"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                  }`}>
                    {venture.status}
                  </span>
                </div>
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
