import { motion } from "framer-motion";
import { Code2, Wrench, Brain, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Services = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Website Development & Design",
      items: [
        "Custom WordPress sites with easy self-management",
        "Landing pages for campaigns/programs",
        "Donation/payment integration",
        "Mobile-responsive designs",
        "Basic SEO setup"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Digital Tools Integration",
      items: [
        "CRM setup and automation",
        "Email marketing systems",
        "Project management tools",
        "Online scheduling/booking",
        "Payment processing"
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Digital Strategy",
      items: [
        "Tech stack optimization",
        "Workflow automation",
        "Website audit/optimization",
        "Digital fundraising strategy",
        "Social media integration"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Training & Support",
      items: [
        "Website maintenance training",
        "Basic design tools training",
        "Digital systems management",
        "Documentation creation",
        "Tech implementation guidance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F2FCE2] to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#9b87f5] mb-4">Services</h2>
          <p className="text-lg text-gray-600 mb-8">Empowering organizations with accessible tech solutions</p>
          <blockquote className="italic text-gray-600 max-w-2xl mx-auto bg-white/50 p-6 rounded-lg shadow-sm">
            "Technology should enable, not complicate. I help organizations leverage the right tools to amplify their impact."
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-[#9b87f5]">{service.icon}</span>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#9b87f5]" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};