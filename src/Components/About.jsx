import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="p-6 md:p-12 mx-auto flex flex-col justify-center items-center w-full min-h-screen">
      <motion.h2
      initial={{opacity:0,y:-200}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:2}}
       className="text-4xl font-bold text-center mb-12">About Me</motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{duration:1}}
           className="md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
            <p className="text-lg md:text-xl leading-relaxed selection:bg-lime-700">
              Hello! I’m Mudasir Javid Malik, a dedicated Fullstack Web Developer and Computer Science student at Maharaja Ranjit Singh Punjab Technical University. My journey in tech has been driven by a passion for creating impactful and user-centric web experiences.
            </p>
            <hr className="my-4 border-gray-600" />
            <p className="text-lg md:text-xl leading-relaxed selection:bg-lime-700">
              I thrive on turning complex problems into elegant solutions. Here’s a glimpse into my journey:
            </p>
            <ul className="list-disc list-inside mt-2 mb-4 pl-5 space-y-2">
              <li>Building responsive and accessible web applications.</li>
              <li>Exploring new technologies and staying up-to-date with industry trends.</li>
              <li>Collaborating with teams to achieve common goals and deliver results.</li>
              <li>Continually improving my skills and expanding my knowledge base.</li>
            </ul>
            <p className="text-lg md:text-xl leading-relaxed selection:bg-lime-700">
              My experiences have not only honed my technical skills but have also taught me the value of perseverance and creativity. I'm always eager to take on new challenges and contribute to exciting projects. Feel free to explore my portfolio and reach out if you’re interested in working together or simply want to discuss web development!
            </p>
          </motion.div>
          <motion.div
           initial={{ opacity: 0, y: 200 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{duration:1}}
           className="md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
            <p className="text-lg md:text-xl leading-relaxed selection:bg-lime-700">
              My goal is to leverage technology to solve real-world problems and create meaningful experiences. Whether you’re looking for a collaborator, a developer for your next project, or just someone to share insights with, I’m here and excited to connect.
            </p>
            <hr className="my-4 border-gray-600" />
            <p className="text-lg md:text-xl leading-relaxed text-center selection:bg-lime-700">
              Thank you for visiting my portfolio! I look forward to hearing from you and exploring opportunities to create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
