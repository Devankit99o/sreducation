'use client';
import SimpleSlider from './SimpleSlider';
import { useState, useEffect } from 'react';
import { createClient } from "next-sanity";

const client = createClient({
  projectId: '4o4vd3og',
  dataset: 'production',
  apiVersion: '2024-04-01',
  useCdn: false,
});

// Fallback data in case Sanity fails
const fallbackData = {
  dailyHighlights: [
    { src: '/images/student/students6.jpg', title: 'Prayer Assembly' },
    { src: '/images/student/sch1.jpg', title: 'Morning Prayer' },
    { src: '/images/student/students1.jpg', title: 'Gift of Smiles' },
    { src: '/images/student/students2.jpg', title: 'Prayer Meet' },
    { src: '/images/student/students3.jpg', title: 'Celebrating Freedom' },
    { src: '/images/student/students4.jpg', title: 'Independence Day Celebration' },
    { src: '/images/student/students5.jpg', title: 'Morning Invocation' }
  ],
  festivalHighlights: [
    { src: '/images/festival/festival4.jpg', title: 'Annual Achievement Awards' },
    { src: '/images/festival/festival3.jpg', title: 'School Reopening Ritual' },
    { src: '/images/festival/festival2.jpg', title: 'Republic Day Heroes' },
    { src: '/images/festival/festival1.jpg', title: 'Rakhi with Protectors' },
    { src: '/images/festival/festival5.jpg', title: 'Blessed by Innocence' },
    { src: '/images/festival/festival7.jpg', title: 'Grand Annual Celebration' }
  ],
  pvHighlights: [
    { src: '/images/pv/pv.jpg', title: 'Inspiring Future Leaders' },
    { src: '/images/pv/pv1.jpg', title: 'Motivational Visit' },
    { src: '/images/pv/pv3.jpg', title: 'Empowerment Through Education' },
    { src: '/images/pv/pv5.jpg', title: 'Encouraging Future Generations' }
  ],
  agratourHighlights: [
    { src: '/images/agratour/agratour10.jpg', title: 'Agra Fort Adventure' },
    { src: '/images/agratour/agratour9.jpg', title: "Discovering Agra's Heritage" },
    { src: '/images/agratour/agratour7.jpg', title: 'Cross-Cultural Engagement' },
    { src: '/images/agratour/agratour6.jpg', title: "Akbar's Tomb Adventure" },
    { src: '/images/agratour/agratour5.jpg', title: 'Gurudwara Blessings Trip' },
    { src: '/images/agratour/agratour4.jpg', title: 'Mehtab Bagh Excursion' }
  ]
};

export default function SliderContainer() {
  const [images, setImages] = useState(fallbackData);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const query = `*[_type == "festival"][0] {
          dailyHighlights[] {
            "src": image.asset->url,
            title,
            order
          },
          festivalHighlights[] {
            "src": image.asset->url,
            title,
            order
          },
          pvHighlights[] {
            "src": image.asset->url,
            title,
            order
          },
          agratourHighlights[] {
            "src": image.asset->url,
            title,
            order
          }
        }`;
        
        const result = await client.fetch(query);
        
        if (result) {
          // Sort each array by order and transform to match the required format
          const sortedImages = {
            dailyHighlights: result.dailyHighlights?.sort((a, b) => a.order - b.order) || fallbackData.dailyHighlights,
            festivalHighlights: result.festivalHighlights?.sort((a, b) => a.order - b.order) || fallbackData.festivalHighlights,
            pvHighlights: result.pvHighlights?.sort((a, b) => a.order - b.order) || fallbackData.pvHighlights,
            agratourHighlights: result.agratourHighlights?.sort((a, b) => a.order - b.order) || fallbackData.agratourHighlights
          };
          setImages(sortedImages);
        }
      } catch (error) {
        console.error("Error fetching festival images:", error);
        // Keep using fallback data if there's an error
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <div id='festival'>
        <h1 className="text-center text-white bg-green-900 font-semibold pb-3 pt-2 tracking-tight text-lg md:text-3xl lg:text-4xl">
          Cultural & Daily Highlights
        </h1>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 bg-green-900 pb-20 pt-5 relative z-[-10] md:z-10">
          <div className="slider-item">
            <SimpleSlider images={images.dailyHighlights} />
          </div>
          <div className="slider-item">
            <SimpleSlider images={images.festivalHighlights} />
          </div>
          <div className="slider-item">
            <SimpleSlider images={images.pvHighlights} />
          </div>
          <div className="slider-item">
            <SimpleSlider images={images.agratourHighlights} />
          </div>
        </div>
      </div>
    </>
  );
}
