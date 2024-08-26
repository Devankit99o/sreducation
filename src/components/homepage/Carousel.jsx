'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for Next.js and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel() {
  const images = [
    '/images/schoolimg.jpg',
    '/images/schoolimg1.jpg',
    '/images/ofc.jpg',
    '/images/mdimg.jpg',
    '/images/mdimg1.jpg',
   
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 4 seconds

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
    <div className="relative w-full  h-[60vh]  z-[-1]">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-green-600 z-20 hover:text-red-600 transition-colors duration-200"
      />
      <div className="w-full h-full flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          <div className="relative w-full h-full z-0">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={image}
                    fill
                    priority
                    className="transition-opacity duration-[3000ms] ease-in-out"
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-green-600 z-20 hover:text-red-600 transition-colors duration-300"
      />
    </div>
  );
}
