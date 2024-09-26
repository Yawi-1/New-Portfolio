import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGit, FaServer,FaGlobe } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiBootstrap, SiFirebase, SiExpress } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { IoIosColorPalette } from 'react-icons/io';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, name: "React", icon: <FaReact size={40} className="text-cyan-500" /> },
  { id: 2, name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { id: 3, name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600 " /> },
  { id: 4, name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-400 " /> },
  { id: 5, name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { id: 6, name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { id: 7, name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
  { id: 8, name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-500" /> },
  { id: 9, name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-600" /> },
  { id: 10, name: "Express", icon: <SiExpress size={40} className="text-white" /> },
  { id: 11, name: "REST API", icon: <FaServer size={40} className="text-red-600" /> },
  { id: 12, name: "Git", icon: <FaGit size={40} className="text-orange-600" /> },
  { id: 13, name: "UI/UX Design", icon: <MdDesignServices size={40} className="text-blue-500" /> },
  { id: 14, name: "Responsive Design", icon: <IoIosColorPalette size={40} className="text-green-500" /> },
  { id: 15, name: "Postman", icon: <FaGlobe size={40} className="text-orange-500" /> },
];

const Skills = () => {
  return (
    <div id="skills" name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen p-4 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full h-full">
      <motion.h2
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{duration:1}}
       className="text-4xl font-bold text-center mb-12">Skills</motion.h2>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-0 md:px-12 sm:px-0">
          {skills.map(({ id, name, icon }) => (
            <motion.div
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5}}
              key={id}
              className="shadow-md hover:scale-125 duration-700 cursor-pointer shadow-white hover:shadow-green-400 rounded-lg py-6 flex flex-col items-center justify-center bg-gray-700"
            >
              <div className="flex flex-col items-center">
                <span className=''>
                {icon}

                </span>
                <p className="mt-4 text-lg text-center px-2">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
