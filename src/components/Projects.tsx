import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application that helps users organize tasks, set deadlines, and track progress with a clean, intuitive interface.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data, forecasts, and location-based weather information.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["JavaScript", "API Integration", "CSS3", "Responsive Design"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social networking application with features like user profiles, posts, comments, and real-time notifications.",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A health and fitness application that allows users to log workouts, track progress, and visualize fitness data.",
    image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React Native", "Firebase", "Charts.js", "Expo"],
    github: "https://github.com/",
    demo: "https://example.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills, projects, and professional experience with a modern design.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    github: "https://github.com/",
    demo: "https://example.com"
  }
];

// Filter categories
const allCategories = ["All", ...Array.from(new Set(projectsData.flatMap(project => project.tags)))];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allCategories.slice(0, 8).map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;