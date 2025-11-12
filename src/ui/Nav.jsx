import React, { useState } from 'react';
import ListItems from '../component/ListItems';
import Flex from '../component/Flex';
import Contener from '../component/Contener';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for the toggle button

const Nav = () => {
    // State to manage the visibility of the mobile menu
    const [open, setOpen] = useState(false);

    // Array of navigation links for easier mapping
    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        // Use 'sticky top-0 z-50' to keep the nav fixed at the top, and removed unnecessary div wrapper
        <nav className='bg-gradient-to-r from-[#0C2246] via-[#12476A] to-[#0D4669] pt-4 pb-4 sticky top-0 z-50'>
            <Contener>
                <Flex className='justify-between items-center px-4'>
                    {/* Logo/Brand - Reduced size on mobile for better fit */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1baaf1] to-[#37D8FA] bg-clip-text text-transparent ">
                        Rifat
                    </h2>

                    {/* Desktop Navigation Links (Visible on medium screens and up) */}
                    <ul className='hidden md:flex gap-8'>
                        {navLinks.map((link) => (
                            <ListItems
                                key={link}
                                Items={link}
                                className='text-lg text-white font-medium hover:text-[#37D8FA] transition-colors duration-300 cursor-pointer'
                            />
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle Button (Visible on small screens) */}
                    <div className='md:hidden'>
                        <button 
                            onClick={() => setOpen(!open)}
                            className='text-white text-3xl p-2 hover:text-[#37D8FA] transition-colors duration-200'
                            aria-label="Toggle menu"
                        >
                            {/* Display X icon when menu is open, Menu icon otherwise */}
                            {open ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </Flex>

                {/* Mobile Dropdown Menu (Conditionally rendered) */}
                <ul className={`md:hidden absolute w-full left-0 transition-all duration-300 ease-in-out ${open ? 'top-[68px] opacity-100' : 'top-[-490px] opacity-0 pointer-events-none'} bg-[#0C2246] shadow-xl`}>
                    {navLinks.map((link) => (
                        <ListItems
                            key={link}
                            Items={link}
                            className='text-xl text-white font-medium hover:text-[#37D8FA] py-3 px-6 border-b border-[#12476A] transition-colors duration-300 cursor-pointer text-center'
                            // Close the menu when a link is clicked
                            onClick={() => setOpen(false)}
                        />
                    ))}
                </ul>

            </Contener>
        </nav>
    );
};

export default Nav;