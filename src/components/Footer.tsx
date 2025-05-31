import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Himanshu Mishra</h3>
            <p className="text-gray-400 mb-6">
              A passionate software developer focused on creating clean, efficient, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/himanshu-mishra-01336a269/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>New Delhi, India</p>
              <p>
                <a 
                  href="mailto:contact@example.com" 
                  className="hover:text-white transition-colors"
                >
                  contact@example.com
                </a>
              </p>
              <p>+91 98765 43210</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {year} Himanshu Mishra. All rights reserved.
          </p>
          
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;