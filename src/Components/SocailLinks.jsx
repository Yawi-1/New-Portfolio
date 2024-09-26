import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
const SocailLinks = () => {
const links =[
    {
        id:1,
        child: (
            <>
            Linkedin <FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/mudasir143/',
        style:'rounded-tr-md',
    },
    {
        id:2,
        child: (
            <>
            Github <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/Yawi-1',
    },
    {
        id:3,
        child: (
            <>
            Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:yawimalik786@gmail.com',
    },
    {
        id:4,
        child: (
            <>
            Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true
    }
]
  return (
    <div
     className=" top-[35%]  left-0 w-full fixed">
      <ul className="">
        {links.map(({id,child,href,download,style})=>(
           <li key={id} className={"flex  justify-between items-center px-4 w-40 h-14 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 " + " " + style}>
           <a href={href}
           download={download}
           target="_blank"
            className="flex items-center justify-between text-white w-full">
             <>
               {child}
             </>
           </a>
         </li>
    
        ))}
        
      </ul>
    </div>
  );
};

export default SocailLinks;
