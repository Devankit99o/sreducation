'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: '4o4vd3og',
  dataset: 'production',
  apiVersion: '2024-04-01',
  useCdn: false,
});

/**
 * Carousel component for Next.js and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "carousel"][0] {
          carouselImages[] {
            "imageUrl": image.asset->url,
            alt,
            title,
            description,
            order
          }
        }`;
        const result = await client.fetch(query);
        if (result && result.carouselImages) {
          // Sort images by order field
          const sortedImages = result.carouselImages.sort((a, b) => a.order - b.order);
          setImages(sortedImages);
        }
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000); // Change slide every 5 seconds

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

  if (images.length === 0) {
    return null; // Or a loading state
  }

  return (
    <div className="relative w-full h-[40vh] md:h-[65vh]" id="home">
      <div className="absolute inset-0 flex items-center justify-between">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="text-4xl cursor-pointer text-green-800 hover:text-red-600 transition-colors duration-200 z-10"
        />
        <AiOutlineRight
          onClick={handleNextSlide}
          className="text-4xl cursor-pointer text-green-800 hover:text-red-600 transition-colors duration-300 z-10"
        />
      </div>
      
      <div className="w-full h-full flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative w-full h-full"
        >
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-[3000ms] ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    fill
                    priority
                    className="transition-opacity duration-[3000ms] ease-in-out"
                    alt={image.alt || `Slide ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Swipe>
      </div>
    </div>
  );
}
