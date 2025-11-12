import React from 'react';
// Import icons (assuming react-icons, adjust based on your library)
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai'; 
import Contener from '../component/Contener';

const Contact = () => {
  // Basic input component for clean JSX
  const InputField = ({ label, type, placeholder, name }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
      />
    </div>
  );

  return (
    
    <div className="min-h-screen bg-gray-900 flex items-center justify-between p-4">
      
        
        <Contener>
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Get In Touch
        </h1>

        {/* Two-Column Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: Contact Info & Intro */}
          <div className="lg:w-1/2 p-6 rounded-lg bg-gray-800 text-white flex flex-col justify-start">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Let's Connect
            </h2>
            <p className="mb-8 text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            {/* Contact Details List */}
            <div className="space-y-6">
              <div className="flex items-start">
                <AiOutlineMail className="text-blue-400 w-6 h-6 mr-3 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Email</p>
                  <a href="mailto:jenodinerifat41@email.com" className="text-white hover:text-blue-400 transition">
                    jenodinerifat41@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <AiOutlinePhone className="text-blue-400 w-6 h-6 mr-3 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Phone</p>
                  <a href="tel:+8801706190759" className="text-white hover:text-blue-400 transition">
                    +8801706190759
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <AiOutlineEnvironment className="text-blue-400 w-6 h-6 mr-3 mt-1" />
                <div>
                  <p className="text-sm font-medium text-gray-300">Location</p>
                  <p className="text-white">Dhaka, BanglaDesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 p-6 rounded-lg bg-gray-800 shadow-xl">
            <form>
              <InputField 
                label="Name" 
                type="text" 
                placeholder="Your Name" 
                name="name" 
              />
              <InputField 
                label="Email" 
                type="email" 
                placeholder="your.email@example.com" 
                name="email" 
              />
              
              {/* Message Textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
   
      </Contener>
    </div>
  );
};

export default Contact;