'use client';
import dynamic from 'next/dynamic';

// const Facilities = dynamic(() => import('./Facilities'), { ssr: false });
import Facilities from '@/components/facilities/Facilities';
const FacilitiesContainer = () => {
  const facilitiesData = [
    { index:0,
      imageSrc: "/cardimg/smartroom.png",
      title: "Smart Classroom",
      description: "Classrooms from Nursery to XII feature Smart Boards with advanced multimedia capabilities for enhanced learning.",
    },
    {
      index:1,
      imageSrc: "/cardimg/library.jpg",
      title: "Library",
      description: "The school offers three libraries with extensive journals, periodicals, and AV media for immersive learning.",
    },
    { 
      index:2,
      imageSrc: "/cardimg/playground.JPG",
      title: "Playground",
      description: "A space specifically designed to actively engage children in a wide range of sports activities.",
    },
    {
      index:3,
      imageSrc: "/cardimg/activityhall.jpg",
      title: "Activity Hall",
      description: "The school features centrally air-conditioned halls and audio-visual rooms equipped with cutting-edge facilities.",
    },
    {
      index:4,
      imageSrc: "/cardimg/conferenceroom.jpg",
      title: "Conference Room",
      description: "A designated area for official interactions between the Principal and faculty members of the school.",
    },
    {
      index:5,
      imageSrc: "/cardimg/opentheater.png",
      title: "Open Theater",
      description: "The creatively crafted Open Air Theatres enhance the aesthetic appeal of the school's elegant design and picturesque landscaping.",
    },
    {
      index:6,
      imageSrc: "/cardimg/computerlab.jpg",
      title: "Computer Lab",
      description: "The school is equipped with modern computer labs featuring the latest computers for students from Nursery to Class 12.",
    },
    {
      index:7,
      imageSrc: "/cardimg/sciencelab.png",
      title: "Science Lab",
      description: "The school features three dedicated laboratories for Physics, Biology, and Chemistry, enabling hands-on learning in each subject.",
    },
    {
      index:8,
      imageSrc: "/cardimg/transport.jpg",
      title: "Transport",
      description: "The school operates a fleet of air-conditioned buses for the comfortable transportation of both Senior and Junior wing students.",
    },
    {
      index:9,
      imageSrc: "/cardimg/germanlab.jpg",
      title: "German lab",
      description: "“Raum Goethe” includes an LCD, projector, overhead projector, and audio system to enhance German language learning.",
    },

  ];

  return (

    <>
      <div id='facilities'  >
       <h1 className="text-center text-white bg-green-900 font-semibold  pt-2  text-lg md:text-3xl lg:text-4xl">
  The Future of Education in Our Spaces
</h1>

        <div className="flex flex-wrap justify-center gap-6 bg-green-900  relative z-[-1]  md:z-10 ">
          {facilitiesData.map((facility, index) => (

            <Facilities
              imageSrc={facility.imageSrc}
              title={facility.title}
              description={facility.description}
              key={index} 
            />

          ))}
        </div>
      </div>
    </>
  );
}

export default FacilitiesContainer;
