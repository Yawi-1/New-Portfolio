import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import EduTutor from '../../public/EduTutor.webp'
import University from '../../public/university.webp'
import Ecommerce from '../../public/Ecommerce.webp'
import projectManager from '../../public/projectManager.webp'
import { motion } from "framer-motion";
// Sample projects data
const projects = [
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A feature-rich application built with the latest technologies.",
    image: Ecommerce, 
    github: "https://github.com/Yawi-1/ScRollArRu_Project",
    liveDemo: "https://scrollar4u.netlify.app/",
  },
  {
    id: 1,
    title: "Edu-Tutor",
    description: "A Responsive Home Page for an Online Education Platform, Created Using React,Tailwind and Framer-motion. ",
    image: EduTutor, 
    github: "https://github.com/Yawi-1/Edu-Tutor",
    liveDemo: "https://edututor.netlify.app/",
  },
  {
    id: 2,
    title: "University Website",
    description: "A complete responsive frontend of a university website which contain many pages and created using HTML,CSS & JS ",
    image: University,
    github: "https://github.com/Yawi-1/collegeWebsite.github.io",
    liveDemo: "https://yawi-1.github.io/collegeWebsite.github.io/",
  },
  {
    id: 4,
    title: "Project Manager",
    description: "An innovative website designed to manage the projects of students, it is responsive and also contain admin panel for admin..",
    image: projectManager,
    github: "https://github.com/Yawi-1/projectManagement",
    liveDemo: "https://projectManager.netlify.app",
  },
  // {
  //   id: 5,
  //   title: "Project Five",
  //   description: "A comprehensive platform providing seamless user interactions and advanced features.",
  //   image: "https://via.placeholder.com/400x250", // Replace with actual image URL
  //   github: "https://github.com/yourusername/project-five",
  //   liveDemo: "https://project-five.example.com",
  // },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gray-900 text-white w-full py-12"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        {/* Project Card... */}
        <div className="grid grid-cols md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
            initial={{y:100}}
              whileInView={{y:0}}
              transition={{duration:0.5}}
              key={project.id}
              className=" bg-gray-800 relative group rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:h-72 object-fill  "
                loading="lazy"
              />
              <div
               className="p-6 md:hidden group-hover:block md:absolute top-0 h-full w-full  left-0 bg-black/80 md:text-center transition-all ">
                <h3 className="text-2xl  font-bold mb-2">{project.title}</h3>
                <p className=" font-semibold text-yellow-500 mb-4">{project.description}</p>
                <div className="flex justify-center  gap-8">
                  <a
                    href={project.github}
                    target="_blank"
                  >
                    <FaGithub className="hover:scale-105 cursor-pointer" title="GitHub Repository" size={24} />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip="Live Demo"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaExternalLinkAlt title="Live Demo" className="hover:scale-105" size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
