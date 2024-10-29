'use client';
import dynamic from 'next/dynamic';
import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const Card = dynamic(() => import("@material-tailwind/react").then(mod => mod.Card), { ssr: false });
const CardHeader = dynamic(() => import("@material-tailwind/react").then(mod => mod.CardHeader), { ssr: false });
const CardBody = dynamic(() => import("@material-tailwind/react").then(mod => mod.CardBody), { ssr: false });

const getRandomColor = () => {
  const colors = ['#FF0000', '#FFA500', '#FFC107', '#4B0082', '#EE82EE', '#FFC0CB', '#800080', '#40E0D0', '#FFD700', '#000080', '#008080', '#A52A2A', '#000000'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Facilities = ({ imageSrc, title, description }) => {
  const [bgColor, setBgColor] = useState(getRandomColor());

  const handleMouseEnter = () => {
    setBgColor(getRandomColor()); 
  };

  // const handleMouseLeave = () => {
  //   setBgColor(getRandomColor()); 
  // };
  
  // Set initial color on mount
  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return (
    <Card
      className="mt-6 w-60 h-[25rem] Roboto text-white shadow-2xl rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-10 "
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <CardHeader color="white" className="relative rounded-2xl overflow-hidden w-full mx-0 ">
        <img
          src={imageSrc}
          alt="card-image"
          className="w-60 h-40 "  // Full width, defined height, and no padding/margin
        />
      </CardHeader>
      
      <CardBody className=" text-pretty transition-colors duration-300 ease-in-out text-white font-medium text-center ">
        <Typography 
          variant="h4" 
          color="inherit" 
          className="text-center"
        >
          {title}
        </Typography>
        
        <Typography color="inherit" className="text-wrap mt-5">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Facilities;
