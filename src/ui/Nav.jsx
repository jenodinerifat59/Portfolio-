import React, { useState } from 'react';
import Flex from '../component/Flex';
import Contener from '../component/Contener';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className='bg-gradient-to-r from-[#0C2246] via-[#12476A] to-[#0D4669] pt-4 pb-4 sticky top-0 z-50'>
      <Contener>
        
        {/* Top row */}
        <Flex className='justify-between items-center px-4'>
          
          {/* Logo */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1baaf1] to-[#37D8FA] bg-clip-text text-transparent">
            Rifat
          </h2>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-8'>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className='text-lg text-white font-medium hover:text-[#37D8FA] transition-colors duration-300 cursor-pointer'
              >
                {link}
              </a>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <div className='md:hidden'>
            <button
              onClick={() => setOpen(!open)}
              className='text-white text-3xl p-2 hover:text-[#37D8FA] transition-colors duration-200'
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>

        </Flex>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`md:hidden absolute w-full left-0 transition-all duration-300 ease-in-out 
            ${open ? 'top-[68px] opacity-100' : 'top-[-490px] opacity-0 pointer-events-none'}
            bg-[#0C2246] shadow-xl`}
        >
          {navLinks.map((link) => (
           <div className='geid gap-2 text-center'>
             <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className='text-xl text-white font-medium hover:text-[#37D8FA] py-3 px-6 border-b border-[#12476A] 
              transition-colors duration-300 cursor-pointer text-center'
            >
              {link}
            </a>
           </div>
          ))}
        </ul>

      </Contener>
    </nav>
  );
};

export default Nav;
