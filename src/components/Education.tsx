import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  description: string;
  achievements?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology",
    date: "2018 - 2022",
    description: "Graduated with honors in Computer Science and Engineering with a focus on software development and algorithms.",
    achievements: [
      "Maintained a GPA of 8.5/10 throughout the program",
      "Led the Web Development Club for 2 years",
      "Participated in national-level coding competitions"
    ]
  },
  {
    degree: "Higher Secondary Education",
    institution: "Delhi Public School",
    date: "2016 - 2018",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    achievements: [
      "Scored 95% in final examinations",
      "Recipient of the Excellence in Science award",
      "Active participant in school's programming club"
    ]
  }
];

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const certificationData: CertificationItem[] = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-12345678"
  },
  {
    title: "Advanced React and Redux",
    issuer: "Coursera",
    date: "2022",
    credentialId: "CR-98765432"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "LeetCode",
    date: "2021",
    credentialId: "LC-13579246"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-24680135"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Section */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap size={24} className="text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 font-medium mb-3">{item.institution}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    
                    {item.achievements && (
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700 flex items-start">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certifications Section */}
            <div>
              <div className="flex items-center mb-8">
                <Award size={24} className="text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                    <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{cert.date}</span>
                      
                      {cert.credentialId && (
                        <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200"
              >
                <h4 className="text-lg font-semibold text-blue-600 mb-3">Continuous Learning</h4>
                <p className="text-gray-700">
                  I'm committed to continuous learning and regularly take courses to expand my skills and stay updated with the latest technologies and industry best practices.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;