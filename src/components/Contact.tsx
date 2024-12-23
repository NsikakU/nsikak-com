import { motion } from "framer-motion";
import { Mail, MessageSquare, Coffee } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/me-nsikak/30min", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-[#9b87f5] mb-6 text-center">Let's Collaborate</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Looking forward to connecting with fellow innovators and changemakers. Whether you're interested in my ventures, 
              want to discuss potential collaborations, or just want to chat about technology and social impact, I'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-semibold mb-2">Email Me</h3>
                <p className="text-sm text-gray-600">For formal inquiries and proposals</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-semibold mb-2">Schedule a Call</h3>
                <p className="text-sm text-gray-600">Let's discuss your ideas in detail</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-lg text-center"
              >
                <Coffee className="w-8 h-8 mx-auto mb-4 text-[#9b87f5]" />
                <h3 className="font-semibold mb-2">Coffee Chat</h3>
                <p className="text-sm text-gray-600">Casual conversations about tech & impact</p>
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-[#9b87f5] to-[#63B3ED] hover:opacity-90"
                onClick={() => window.location.href = "mailto:me@nsikak.com"}
              >
                <Mail className="mr-2 h-4 w-4" /> Send an Email
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white"
                onClick={handleScheduleMeeting}
              >
                <MessageSquare className="mr-2 h-4 w-4" /> Schedule a Meeting
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};