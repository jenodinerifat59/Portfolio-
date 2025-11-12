import React from 'react'
import { motion } from "framer-motion"
import Contener from '../component/Contener'
import Flex from '../component/Flex'
import Button from '../component/Button'
import { GoDownload } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import cvFile from "../assets/Rifat Frontend Developer.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Rifat-Frontend-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='bg-gradient-to-r from-[#0C2246] via-[#12476A] to-[#0D4669] pt-[80px] pb-[80px] md:pt-[100px] md:pb-[100px] overflow-hidden'>
      <Contener className='text-center px-4'> 

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight" // 
        >
          Hi, I'm{" "}
          <span className="font-extrabold bg-gradient-to-r from-[#1baaf1] to-[#37D8FA] bg-clip-text text-transparent">
            Md. Jenodine Islam Rifat
          </span>
        </motion.h1>


        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className='text-2xl sm:text-3xl md:text-4xl font-medium text-[#98A4B3] mt-4 md:mt-5' // 
        >
          Frontend Developer
        </motion.h2>

      
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className='text-base sm:text-lg md:text-xl font-medium text-[#98A4B3] mt-5 md:mt-[30px] max-w-3xl mx-auto' 
        >
          Crafting beautiful, responsive web experiences with modern technologies. <br />
          Dedicated to clean code and pixel-perfect design.
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
       
          <Flex className='justify-center flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10'> 
       
            <button
              onClick={handleDownload}
              className='text-base sm:text-xl font-medium rounded bg-[#1FB1F9] px-6 sm:px-10 py-3 flex items-center justify-center gap-2 hover:bg-[#37D8FA] transition-all duration-300 w-full sm:w-auto'
            >
              <GoDownload /> Download CV
            </button>

            <Button
              className='text-base sm:text-xl font-medium border border-[#1FB1F9] rounded px-6 sm:px-10 py-3 text-[#1FB1F9] hover:bg-[#1FB1F9] hover:text-black transition-all duration-300 w-full sm:w-auto'
              Items={
                <div className='flex items-center justify-center gap-2'>
                  <MdMailOutline /> Contact Me
                </div>
              }
            />
          </Flex>
        </motion.div>
      </Contener>
    </section>
  )
}

export default Hero