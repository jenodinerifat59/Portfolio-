import React from 'react'
import Contener from '../component/Contener'
import Flex from '../component/Flex'
import Button from '../component/Button'
import { GoDownload } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";


const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-[#0C2246] via-[#12476A] to-[#0D4669] pt-[100px] pb-[100px]'>
    <Contener className='text-center '>
    <div>
      <h1 className='text-6xl font-extrabold text-white'>Hi, I'm <span className='font-extrabold bg-gradient-to-r from-[#1baaf1] to-[#37D8FA] bg-clip-text text-transparent'> Md. Jenodine Islam Rifat</span></h1>
    </div>
    <h2 className='text-4xl font-medium text-[#98A4B3] mt-5'>Frontend Developer</h2>
    <p className='text-xl font-medium text-[#98A4B3] mt-[30px]'>Crafting beautiful, responsive web experiences with modern technologies. <br /> Dedicated to clean code and pixel-perfect design.</p>
    <Flex className='justify-center gap-6'>
      <Button className='text-xl font-medium  rounded bg-[#1FB1F9] px-10 py-3 mt-8'  Items={ <div className='flex items-center gap-2'><GoDownload /> Download CV</div>
}
      />
      <Button className='text-xl font-medium border border-[#1FB1F9] rounded  px-10 py-3 mt-8  text-[#1FB1F9] hover:bg-[#1FB1F9] hover:text-black' Items={
        <div className='flex items-center gap-2'><MdMailOutline />
 Contact Me</div>
      }/>
    </Flex>
    </Contener>
    </section>
  )
}

export default Hero
