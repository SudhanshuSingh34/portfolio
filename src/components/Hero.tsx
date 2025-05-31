import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-300">Himanshu Mishra</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8">
            Software Developer | Web Developer | Tech Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-gray-100">
            I build exceptional digital experiences with modern technologies
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://www.linkedin.com/in/himanshu-mishra-01336a269/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-full transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-full transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="bg-white text-blue-600 hover:bg-blue-100 p-3 rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="inline-block animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;