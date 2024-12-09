
import React, { useEffect, useState } from "react";
import HeroImg from "../assets/HeroImg.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { motion } from 'framer-motion'
import ContactModal from "./ContactModal";

const Home = ({ showForm, setShowForm }) => {
  const text = "I'm a Full Stack Web Developer.";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const typeText = () => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
        timeoutId = setTimeout(typeText, 200); // Adjust animation speed
      } else {
        setTimeout(() => {
          setDisplayText("");
          index = 0;
          typeText();
        }, 1000); // Wait before restarting
      }
    };

    typeText();

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [text]);




  return (
    <div
      id="home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-4 pt-40 md:pt-0 sm:px-6 pb-4 "
    >
      <div className="w-full mx-auto flex flex-col  items-center justify-center h-full md:flex-row text-white">
        <div className="flex flex-col md:w-[60%]  justify-center items-center h-full md:pr-8 ">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl  lg:text-6xl      md:w-[74%]   h-16 md:h-36 px-4  font-bold  ">
            {displayText}
          </motion.h2>
          {showForm && <ContactModal setShowForm={setShowForm} />}
          <p
            className="text-gray-400 py-4 md:w-[70%]  md:mx-0">
            Hello! I'm <span className="font-bold text-white">Mudasir Javid Malik</span>, a passionate web developer specializing
            in building modern, responsive applications using the <span className="font-bold text-white">MERN Stack</span> (MongoDB,Express,React, & Node);
          </p>
          <div className="flex md:w-[70%]  md:flex-row py-2 text-xs md:text-sm gap-4 mx-auto md:mx-0">
            <a href='#projects'
              className=" group flex items-center gap-4 px-2 py-1 md:px-6 md:py-3 my-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md cursor-pointer">
              Portfolio
              <span
                className="group-hover:rotate-90 duration-300 ml-2">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="shadow group transition-all flex items-center 
              gap-4 px-2 py-1 md:px-6 md:py-3 text-white duration-500
              bg-orange-500 rounded-full my-2  hover:bg-white hover:text-orange-500"
            
            >
              Contact Me
              <span className="group-hover:scale-115">
                <IoMail size={25} />
              </span>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/4  md:mt-0">
          <img
            src={HeroImg}
            alt="my profile"
            className="rounded-2xl  w-2/3 md:w-full mx-auto mb-10 md:mb-0"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
