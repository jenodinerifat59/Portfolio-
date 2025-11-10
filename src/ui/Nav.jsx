import React from 'react'
import ListItems from '../component/ListItems'
import Flex from '../component/Flex'
import Contener from '../component/Contener'

const Nav = () => {
    return (
        <div className='bg-gradient-to-r from-[#0C2246] via-[#12476A] to-[#0D4669] pt-4 pb-4'>
        <Contener>
        <Flex className='justify-between items-center'>
            <h2 class="text-5xl font-extrabold bg-gradient-to-r from-[#1baaf1] to-[#37D8FA] bg-clip-text text-transparent ">
                Portfolio
            </h2>
            <ul className='flex gap-8 '>
                <ListItems Items="Home" className='text-lg text-white font-medium hover:text-[#37D8FA] ' />
                <ListItems Items="About"  className='text-lg text-white font-medium hover:text-[#37D8FA] '/>
                <ListItems Items="Skills"  className='text-lg text-white font-medium hover:text-[#37D8FA] '/>
                <ListItems Items="Projects"  className='text-lg text-white font-medium hover:text-[#37D8FA] '/>
                <ListItems Items="Contact" className='text-lg text-white font-medium hover:text-[#37D8FA] ' />
            </ul>
        </Flex>
        </Contener>
        </div>
    )
}

export default Nav
