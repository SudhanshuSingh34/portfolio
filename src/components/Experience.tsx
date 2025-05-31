import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    date: "Jan 2023 - Present",
    description: [
      "Developed and maintained web applications using React and Node.js",
      "Implemented responsive design and ensured cross-browser compatibility",
      "Collaborated with back-end developers and designed RESTful APIs",
      "Optimized applications for maximum speed and scalability"
    ],
    skills: ["React", "Node.js", "TypeScript", "RESTful API", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Innovations",
    date: "May 2021 - Dec 2022",
    description: [
      "Built modern user interfaces using React.js and Tailwind CSS",
      "Created reusable components and hooks for application efficiency",
      "Implemented state management using Redux and Context API",
      "Worked closely with designers to translate mockups into functional interfaces"
    ],
    skills: ["React", "Tailwind CSS", "Redux", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Web Development Intern",
    company: "StartUp Ventures",
    date: "Jan 2021 - Apr 2021",
    description: [
      "Assisted in developing web applications using JavaScript and HTML/CSS",
      "Gained experience with modern frameworks and libraries like React",
      "Participated in code reviews and implemented feedback from senior developers",
      "Contributed to the improvement of UI/UX for company products"
    ],
    skills: ["JavaScript", "HTML/CSS", "React Basics", "Git", "Responsive Design"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Experience items */}
              {experienceData.map((experience, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row mb-16 ${
                    index % 2 === 0 
                      ? 'md:flex-row-reverse text-left md:text-right' 
                      : 'text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`pl-12 md:pl-0 ${
                    index % 2 === 0 
                      ? 'md:pr-16 md:pl-8' 
                      : 'md:pl-16 md:pr-8'
                  } w-full md:w-1/2`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-sm font-medium text-blue-600">{experience.date}</span>
                      <h3 className="text-xl font-bold mt-1">{experience.title}</h3>
                      <h4 className="text-gray-600 font-medium mb-4">{experience.company}</h4>
                      
                      <ul className="mb-4 space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty div for layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;