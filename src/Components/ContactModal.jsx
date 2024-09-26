import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
const ContactModal = ({setShowForm}) => {
  const [loader,setLoader] = useState(false);
      const submitForm = async (e)=>{
        e.preventDefault();

        try {
          setLoader(true);
          const formData = new FormData(e.target);
          formData.append("access_key", `${process.env.REACT_APP_API_KEY}`);
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
            console.log("Success", res);
            toast.success(res.message);
            e.target.reset();
          }
          setLoader(false);
        } catch (error) {
          console.error(error);
          toast.error('Try again Later.......')
          setLoader(false);
          
        }  
      }
  return (
    <div
   className='fixed top-0  right-0 w-full  flex flex-col items-center justify-center z-50 bg-black h-screen'>
    <motion.form
    initial={{y:200,scale:0}}
    whileInView={{y:0,scale:1}}
    transition={{duration:1}}
     className="relative  rounded-md text-black flex flex-col  gap-4 p-6 md:w-1/3 md:mx-auto w-full" 
     onSubmit={submitForm}
     action="">
     <h1 className=' text-center my-12  text-yellow-300 text-2xl md:text-4xl font-bold'>Contact Me</h1>
        <span onClick={()=>setShowForm(false)} className='absolute text-white right-4 top-4 cursor-pointer'><FaTimes size={24}/></span>
        {/* Name input */}
        <label className="text-left text-white" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className="px-4  py-2 rounded-md border-2 border-yellow-500 outline-none focus:border-2 focus:border-orange-400"
          type="text"
          placeholder="Name"
          required
        />

        {/* Email input */}
        <label className="text-left text-white" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          className="px-4 py-2 border-2 border-yellow-500 rounded-md outline-none focus:border-2 text-black focus:border-orange-400"
          type="email"
          placeholder="Email"
          required
          />
        {/* Message textarea */}
        <label className="text-left text-white" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="px-4 border-2 border-yellow-500 py-2 rounded-md outline-none focus:border-2 focus:border-orange-400"
          placeholder="Your message..."
          rows="5"
          ></textarea>

        {/* Submit button */}
        <button
          className="hover:bg-yellow-400  bg-yellow-500 font-bold text-white py-2 rounded-md mt-4"
          type="submit"
          >
          Submit
        </button>
      </motion.form>

      { loader && <Spinner/>}
            </div>
  )
}

export default ContactModal

