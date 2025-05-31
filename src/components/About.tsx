import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square bg-blue-100 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              
              <p className="text-gray-700 mb-4">
                I am a passionate software developer with a strong foundation in web development and a keen interest in creating efficient, scalable, and user-friendly solutions. My journey in technology has equipped me with both technical skills and a problem-solving mindset.
              </p>
              
              <p className="text-gray-700 mb-6">
                With experience in both frontend and backend technologies, I enjoy bringing ideas to life through code. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-gray-700">Sudhanshu Singh</p>
                </div>
                
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-700">contact@example.com</p>
                </div>
                
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-gray-700">India</p>
                </div>
                
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-blue-600">Available for hire</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;