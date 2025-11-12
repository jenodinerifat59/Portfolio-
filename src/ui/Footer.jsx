import React from 'react';

import {FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {

  const socialLinks = [
    {
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/jenodinerifat59',
      bgColorClass: 'bg-blue-600', 
      hoverColorClass: 'hover:bg-blue-400', 
      iconColorClass: 'text-blue-400', 
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      url: 'https://www.linkedin.com/in/jenodinerifat/',
      bgColorClass: 'bg-blue-600',
      hoverColorClass: 'hover:bg-blue-400',
      iconColorClass: 'text-blue-400',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/jenodine_r93990',
      bgColorClass: 'bg-blue-600',
      hoverColorClass: 'hover:bg-blue-400',
      iconColorClass: 'text-blue-400',
    },
    {
      name: 'Email',
      icon: AiOutlineMail,
      url: 'mailto:jenodinerifat41@gmail.com',
      bgColorClass: 'bg-blue-600',
      hoverColorClass: 'hover:bg-blue-400',
      iconColorClass: 'text-blue-400',
    },
  ];

  return (
   
    <div className="bg-gray-800 py-10 flex justify-center items-center min-h-[150px]">
      <div className="flex space-x-6"> 
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon; 

          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
    
              className={`
                w-14 h-14 rounded-full flex items-center justify-center 
                transition-all duration-300 ease-in-out
                bg-opacity-20
                ${link.iconColorClass}
                border border-blue-400 // A subtle border like in your image
                
                // Hover effect: background becomes current icon color, icon itself becomes black
                hover:bg-blue-400 // The background becomes the icon's original blue
                hover:text-gray-900 // The icon itself becomes black
              `}
              aria-label={link.name}
            >
              <IconComponent className="w-7 h-7" /> 
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer ;