import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-2 border-b-4 border-green-600 z-[-1]  ">
      <div className="container  px-4 mt-2 md:mx-10">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/images/logobtm.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="text-black text-lg font-bold font-serif">S R Education Public School, Hanuman Garhi, Jagir, Mainpuri</span>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-end space-y-1  ">
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-600 hover:text-red-600 transition-colors duration-300 transform hover:scale-110 py-2"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-400 hover:text-red-600 transition-colors duration-300 transform hover:scale-110 py-2"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-pink-600 hover:text-red-600 transition-colors duration-300 transform hover:scale-110 py-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-blue-700 hover:text-red-600 transition-colors duration-300 transform hover:scale-110 py-2"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-red-600 hover:text-red-800 transition-colors duration-300 transform hover:scale-110 py-2"
              >
                <FaYoutube size={24} />
              </a>
            </div>
            {/* Copyright Section */}
            <p className="text-gray-800 text-sm text-right mb-0 p-0 ">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
