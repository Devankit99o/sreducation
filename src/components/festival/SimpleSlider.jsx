'use client';
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe"; // Import Swipe
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Import icons

/**
 * SimpleSlider Component with dynamic images passed as props
 * 
 * @param {Array} images - Array of image objects { src, title }
 * @returns React component
 */
export default function SimpleSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentSlide]);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative w-[330px] h-[340px] group "> {/* Group to apply hover effect */}
      <Swipe
        onSwipeLeft={handleNextSlide}
        onSwipeRight={handlePrevSlide}
        className="w-full h-full"
      >
        <div className="w-full h-full flex overflow-hidden relative ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute h-full transition-opacity duration-[3000ms] ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src} // Use image.src to access the image URL
                
                className="w-full h-full object-cover border-[1px] border-black transition-transform duration-300 ease-in-out transform group-hover:scale-105" // Added border and zoom effect
                alt={`Slide ${index + 1}`
              
              }
              />
            </div>
          ))}
        </div>
      </Swipe>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-2 right-2 z-20 transition-transform duration-300 ease-in-out">
        <div className="bg-white text-black text-center rounded-b-3xl p-2 transform translate-y-1/2 group-hover:-translate-y-80 transition-all duration-300 ease-in-out group-hover:rounded-t-3xl"> {/* Adjust the translate on hover */}
          <h2 className="font-bold text-lg">{images[currentSlide]?.title}</h2> {/* Improved title styling */}
        </div>
      </div>

      {/* Left Arrow - show from inside on hover */}
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-green-900 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:text-red-600 transition-colors duration-200"
      />

      {/* Right Arrow - show from inside on hover */}
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-green-900 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:text-red-600 transition-colors duration-200"
      />
    </div>
  );
}
