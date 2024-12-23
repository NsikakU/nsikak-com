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
    <section id="ventures" className="py-20 bg-gradient-to-b from-white to-[#F2FCE2]">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#9b87f5] mb-4">My Ventures</h2>
          <p className="text-lg text-gray-600 mb-8">Creating impact through innovation and technology - Past & Present</p>
          <blockquote className="italic text-gray-600 max-w-2xl mx-auto bg-white/50 p-6 rounded-lg shadow-sm">
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
              className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                venture.status === "Past Venture" || venture.status === "Past Venture (2016)" 
                  ? "border-l-4 border-gray-300" 
                  : venture.status === "New Venture"
                  ? "border-l-4 border-[#F2FCE2]"
                  : "border-l-4 border-[#9b87f5]"
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {venture.icon && (
                      <span className="text-[#9b87f5]">
                        {venture.icon}
                      </span>
                    )}
                    <span className="text-sm text-[#9b87f5] font-medium">
                      {venture.category}
                    </span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    venture.status.includes("Past") 
                      ? "bg-gray-100 text-gray-600"
                      : venture.status === "New Venture"
                      ? "bg-[#F2FCE2] text-green-700"
                      : "bg-[#9b87f5]/10 text-[#9b87f5]"
                  }`}>
                    {venture.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{venture.title}</h3>
                <p className="text-gray-600">{venture.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};