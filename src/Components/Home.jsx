import React from "react";
import HeroImg from "../assets/HeroImg.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import {motion} from 'framer-motion'
import ContactModal from "./ContactModal";

const Home = ({showForm,setShowForm}) => {
  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 pt-40 md:pt-0 sm:px-6 pb-4 "
      // style={{ paddingTop: "8rem" }} 
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row text-white">
        <div className="flex flex-col justify-center h-full md:pr-8 text-center md:text-left">
          <motion.h2 
              initial={{ opacity: 0, scale: 5 }} 
              animate={{ opacity: 1, scale: 1 }}  
              transition={{ duration: 1 }}       
          className="text-3xl sm:text-5xl md:text-7xl font-bold mt-10 md:mt-0">
            I'm a Fullstack Developer
          </motion.h2>
          {showForm && <ContactModal setShowForm={setShowForm} />}
          <motion.p 
          initial={{x:-500}}
          animate={{x:0}}
          transition={{duration:1}}
          className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            Hi, I'm Mudasir Javid Malik. A passionate Full Stack Developer.
            Currently, I love to work on web applications using technologies
            like React, Node, MongoDB, and Tailwind.
          </motion.p>
          <div className="flex flex-col md:flex-row py-2 gap-4 mx-auto md:mx-0">
            <motion.button
            whileHover={{ scale: 1.2 }} // Enlarges when hovered
            whileTap={{ scale: 0.9 }}   // Shrinks when tapped
             className=" text-md group flex items-center gap-4 px-6 py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">
              Portfolio
              <span 
               className="group-hover:rotate-90 duration-300 ml-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </motion.button>
            <motion.button
            initial={{x:-200,y:-200}}
            animate={{x:0,y:0,scale:1}}
                 transition={{duration:1}}
             onClick={()=>setShowForm(true)} className="shadow-md  hover:bg-orange-500 hover:text-white duration-500 flex items-center gap-4 px-6 py-3 rounded-full my-2 bg-white text-orange-500">
              Contact Me
                 <motion.span 
                 initial={{x:400,y:-400,scale:10}}
                 animate={{x:0,y:0,scale:1}}
                 transition={{duration:1}}
                 className="group-hover:opacity-0"><IoMail size={25}/></motion.span>
            </motion.button>
          </div>
        </div>

        <motion.div 
        initial={{opacity:0.5,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{duration:1}}
        className="w-full md:w-2/3 mt-8 md:mt-0">
          <img
            src={HeroImg}
            alt="my profile"
            className="rounded-2xl w-2/3 md:w-full mx-auto mb-10 md:mb-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
