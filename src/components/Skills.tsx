import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, PenTool, Server } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-700 flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const skillsData = [
  {
    icon: <Code size={32} />,
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    icon: <Globe size={32} />,
    title: "Frontend Development",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    icon: <Server size={32} />,
    title: "Backend Development",
    skills: ["Node.js", "Express", "Django", "Flask", "REST API"]
  },
  {
    icon: <Database size={32} />,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    icon: <Layers size={32} />,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
  },
  {
    icon: <PenTool size={32} />,
    title: "Design & Others",
    skills: ["UI/UX Basics", "Figma", "Responsive Design", "SEO Basics"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills\" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                skills={skill.skills}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;