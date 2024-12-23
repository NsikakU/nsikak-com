import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-nsikak-primary hover:text-nsikak-secondary transition-colors duration-300">
            Nsikak
          </a>
          <div className="hidden md:flex space-x-8">
            {['About', 'Ventures', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-nsikak-secondary transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};