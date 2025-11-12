import React from 'react'
import Contener from '../component/Contener'
import Title from '../component/Title'
import Flex from '../component/Flex'
import ListItems from '../component/ListItems'
import Image from '../component/Image'
import MyImag from '../image/myIMg.png'

const About = () => {
    return (
        <section className='bg-[#131720]'>
            <Contener>
                <div className='text-[#1FB1F9] pt-[70px] pb-[70px]'> 
                    <Title head_title="About Me" />
                    
                    <Flex className="flex-col md:flex-row gap-8">
                        
                        <div className='w-full md:w-1/2 mb-8 md:mb-0'> 
                           
                            <Image src={MyImag} className="w-full h-auto rounded-lg transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 ease-in-out cursor-pointer" />
                        </div>

                        <div className='w-full md:w-1/2'>
                         
                            <h2 className='text-white text-2xl font-medium mt-0 md:mt-10 max-w-lg'>Frontend Developer & Creative Problem Solver</h2> 
                            <p className='text-lg md:text-xl font-medium mt-5 text-[#7B8593]'>I'm a passionate frontend developer with a keen eye for design and detail. I love transforming ideas into elegant, user-friendly web applications using the latest technologies and best practices.</p>

                            <p className='text-lg md:text-xl font-medium mt-5 text-[#7B8593]'>With expertise in HTML, CSS, JavaScript, and modern frameworks like React, I create responsive and performant websites that deliver exceptional user experiences.</p>
                            
                            <ul className='mt-5'> 
                                <ListItems Items={<>
                                    <span className="text-blue-400 mr-2">▹</span>
                                    <span className="text-white">Education: Computer Science / Web Development</span>
                                </>} />
                                <ListItems Items={<>
                                    <span className="text-blue-400 mr-2">▹</span>
                                    <span className="text-white">Focus: Modern Web Technologies</span>
                                </>} />
                                <ListItems Items={<>
                                    <span className="text-blue-400 mr-2">▹</span>
                                    <span className="text-white">Interests: UI/UX Design, Open Source</span>
                                </>} />
                            </ul>
                        </div>
                    </Flex>
                </div>
            </Contener>
        </section>
    )
}

export default About