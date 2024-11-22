import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = ({showForm,setShowForm}) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" ,href:"home"},
    { id: 2, link: "about", href:'about' },
    { id: 3, link: "skills" , href:'skills'},
    { id: 4, link: "projects" ,href:"projects"

    },
    { id: 5, link: "contact", href:"/", onclick:()=>{ setShowForm(!showForm)} },
  ];

  const handleNavClick = () => setNav(!nav);

  return (
    <div className="flex items-center justify-between py-4 px-4 w-full h-20 text-white bg-black fixed z-50">
      <div className="text-3xl md:text-5xl font-signature">Yawi.dev</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id,href, link,onclick }) => (
          <motion.li
          initial={{ scale:0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
            key={id}
            className="cursor-pointer px-6 text-gray-500 hover:text-white hover:scale-105 duration-200 capitalize text-lg font-semibold"
          >
            <a onClick={onclick} href={`#${href}`}>{link}</a> {/* Added anchor links */}
          </motion.li>
        ))}
      </ul>

      {/* Hamburger Menu for Mobile */}
      <div
        onClick={handleNavClick}
        className="md:hidden z-10 text-gray-500 cursor-pointer"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500">
          {links.map(({ id, link,onclick }) => (
            <li
              key={id}
              onClick={handleNavClick}
              className="px-4 py-6 text-3xl capitalize cursor-pointer"
            >
              <a onClick={onclick} href={`#${link}`}>{link}</a> {/* Added anchor links */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
