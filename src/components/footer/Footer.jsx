import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-1   border-green-600 z-[-1]">
      <div className="container  md:mx-10">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row items-center justify-between h-16 md:h-auto">
          {/* Logo */}
          <div className="flex items-center space-y-1 space-x-3">
            <img src="/images/logobtm.jpg" alt="Logo" className="w-8 h-8 md:w-12 md:h-12 rounded-full" />
            <span className="text-black text-xs md:text-lg font-bold font-serif">
              S R Education Public School, Hanuman Garhi, Jagir, Mainpuri
            </span>
          </div>

          {/* Social Media Links and Copyright Section */}
          <div className="flex flex-row md:flex-row items-end  md:space-y-0 md:space-x-4   md:mt-0">
            <div className="flex space-x-4 md:space-x-6 mr-12 md:mr-0">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-600 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={12} className="md:size-8" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter size={12}  className="md:size-8"/>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-pink-600 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram size={12}  className="md:size-8" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-700 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={12}  className="md:size-8" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-red-600 hover:text-red-800 transition-colors duration-300 transform hover:scale-110"
              >
                <FaYoutube size={12}  className="md:size-8"/>
              </a>
            </div>
            {/* Copyright Text */}
            <span className="text-gray-800 text-xs md:text-sm mb-0 p-0 text-right">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
