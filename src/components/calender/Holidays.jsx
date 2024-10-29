'use client';

import dynamic from 'next/dynamic';
import { Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import styles from './holiday.module.css'; // Import CSS module

const Card = dynamic(() => import("@material-tailwind/react").then(mod => mod.Card), { ssr: false });
const CardHeader = dynamic(() => import("@material-tailwind/react").then(mod => mod.CardHeader), { ssr: false });
const CardBody = dynamic(() => import("@material-tailwind/react").then(mod => mod.CardBody), { ssr: false });

const getRandomColor = () => {
  const colors = ['#FF0000', '#FFA500', '#FFC107', '#4B0082', '#EE82EE', '#FFC0CB', '#800080', '#40E0D0', '#FFD700', '#000080', '#008080', '#A52A2A', '#000000'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const hexToRgba = (hex, opacity) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export default function HolidayCard({ event }) {
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  const fadedColor = hexToRgba(bgColor, 0.5);

  return (
    <>
      <Card className="mt-8 w-[19rem] h-[20rem] text-white shadow-2xl rounded-3xl mb-5 flex items-center justify-center "
        style={{ backgroundColor: fadedColor }}
      >
        <div className="relative h-full w-full">
          <CardHeader
            className="absolute top-5 left-5 w-[45%] h-[50%] rounded-3xl shadow-md p-2 flex items-center justify-center"
            style={{ backgroundColor: bgColor, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.7)' }}
          >
            <div className="text-white text-2xl text-center pt-10 pb-10">
              <div className={`${styles.cabin_sketch_bold} pt-5 `}> {/* Use CSS module class */}
                {new Date(event.start.date || event.start.dateTime).toLocaleDateString('en-US', {
                  day: 'numeric',
                })}
              </div>
              <div className={`${styles.cabin}  text-center text-xl pt-7`}> {/* Use CSS module class */}
                {new Date(event.start.date || event.start.dateTime).toLocaleDateString('en-US', {
                  month: 'long',
                })}
              </div>
            </div>
          </CardHeader>

          <CardBody className="pt-20 pb-10 px-5 h-full flex flex-col justify-end rounded-3xl text-pretty"
            style={{ backgroundColor: fadedColor }}
          >
            <Typography variant="h5" color="blue-gray" className={`${styles.cabin} text-wrap px-5 rounded-3xl`} >
              <div className="text-center">{event.summary}</div>
            </Typography>
          </CardBody>
        </div>
      </Card>
    </>
  );
}
