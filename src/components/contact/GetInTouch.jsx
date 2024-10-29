'use client';
import React from 'react';
import FacebookPageEmbed from './FacebookPageEmbed';
import styles from '../calender/holiday.module.css'; // Import CSS module
import { FaFacebookF } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <div className="relative w-full h-fit overflow-hidden  md:z-10 " id='contact'> {/* Restrict the height to this component */}
      {/* Fixed background image only within this component */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('images/creativekids.jpg')", // Background image
          opacity: '0.5', // Set opacity
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full m-2">
        {/* Left side: Facebook page embed */}
        <div className="flex flex-col items-center justify-center h-full ml-auto md:ml-6 mr-auto md:block hidden">
          <div className="relative w-[318px] h-[667px] bg-white rounded-3xl overflow-hidden">
            {/* Header with Facebook logo */}
            <div className="flex items-center justify-between bg-blue-600 h-10 px-2">
              <div className="flex items-center">
                <FaFacebookF className="text-white text-2xl" />
              </div>
              <h2 className="text-white text-lg font-semibold flex-grow text-center">
                Facebook
              </h2>
            </div>

            {/* Facebook Page Embed */}
            <div className='p-0 m-0'>
              <FacebookPageEmbed />
            </div>
          </div>
        </div>

        {/* Right side: Contact details */}
        <div className="bg-white bg-opacity-70 m-2 mr-auto md:mr-6 rounded-lg w-fit ml-auto leading-loose flex flex-col z-10">
          <h1 className="font-sans text-gray-800 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black to-black leading-loose px-6">
            Get In Touch
          </h1>

          <p className="text-gray-600 text-xl font-bold px-6 mb-2">
            Location:
            <span className="text-gray-600 text-base ml-2 text-balance block md:inline">
              S R Education Public School <br />
              Hanuman Garhi, Jagir, Kishani,
              <br />
              Mainpuri (U.P.), 205268
            </span>
          </p>

          <p className="text-gray-600 text-xl font-bold px-6">
            Call Us On:
            <span className={`${styles.cabin} text-base text-blue-500 ml-1`}>
              <a href="tel:+919997215873">
                999
                <strong className="text-2xl">-</strong>
                721
                <strong className="text-2xl">-</strong>
                5878
              </a>
            </span>
          </p>

          <p className="text-gray-600 text-xl font-bold mb-2 block md:inline px-6">
            Email:
            <span>
              <a
                href="mailto:sreducationpublicschool@gmail.com"
                className="text-blue-500 hover:underline ml-2 text-base block md:inline"
              >
                sreducationpublicschool@gmail.com
              </a>
            </span>
          </p>

          <p className="text-gray-600 text-xl font-bold pb-5 px-6">
            School Hours:
            <span className="ml-2 text-base">8 AM to 3 PM</span>
          </p>

          {/* Google Maps iframe */}
          <div className="w-full h-56 md:h-96 mt-2 p-0 shadow-2xl rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d525.0555181281202!2d79.15614454082892!3d27.082521906285663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975ed4ecacf0bb3%3A0xbbd9ac1c6257b69c!2sS%20R%20EDUCATION%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1728118082678!5m2!1sen!2sin&zoom=21&maptype=roadmap&controls=1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
