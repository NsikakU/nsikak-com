import { motion } from "framer-motion";

export const LogoSection = () => {
  const logos = [
    {
      src: "/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png",
      alt: "Partner Logo 1",
      width: "120px"
    },
    {
      src: "/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png",
      alt: "Partner Logo 2",
      width: "120px"
    },
    {
      src: "/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png",
      alt: "Partner Logo 3",
      width: "120px"
    },
    {
      src: "/lovable-uploads/181d61e3-5ea1-4ad3-9f43-d0b372d65efc.png",
      alt: "Partner Logo 4",
      width: "120px"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#F2FCE2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-nsikak-primary mb-4">Trusted By</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnering with organizations to deliver impactful digital solutions
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-32 h-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width }}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};