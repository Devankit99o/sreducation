'use client';
import SimpleSlider from './SimpleSlider'; // Import the SimpleSlider component

export default function SliderContainer() {
  const imagesSet1 = [
    { src: '/images/student/students6.jpg', title: 'Prayer Assembly' },
    { src: '/images/student/sch1.jpg', title: 'Morning Prayer' },
    { src: '/images/student/students1.jpg', title: 'Gift of Smiles' },
    { src: '/images/student/students2.jpg', title: 'Prayer Meet' },
    { src: '/images/student/students3.jpg', title: 'Celebrating Freedom' },
    { src: '/images/student/students4.jpg', title: 'Independence Day Celebration' },
    { src: '/images/student/students5.jpg', title: 'Morning Invocation' }
   
  ];

  const imagesSet2 = [
   
    { src: '/images/festival/festival4.jpg', title: 'Annual Achievement Awards' },
    { src: '/images/festival/festival3.jpg', title: 'School Reopening Ritual' },
    { src: '/images/festival/festival2.jpg', title: 'Republic Day Heroes' },
    { src: '/images/festival/festival1.jpg', title: 'Rakhi with Protectors' },
    { src: '/images/festival/festival5.jpg', title: 'Blessed by Innocence' },
    { src: '/images/festival/festival7.jpg', title: 'Grand Annual Celebration' }
  ];

  const imagesSet3 = [
    { src: '/images/pv/pv.jpg', title: 'Inspiring Future Leaders' },
    { src: '/images/pv/pv1.jpg', title: 'Motivational Visit' },
    { src: '/images/pv/pv3.jpg', title: 'Empowerment Through Education' },
    { src: '/images/pv/pv5.jpg', title: 'Encouraging Future Generations' },
    
  ];

  const imagesSet4 = [
    { src: '/images/agratour/agratour10.jpg', title: 'Agra Fort Adventure' },
    { src: '/images/agratour/agratour9.jpg', title: "Discovering Agra's Heritage" },
    { src: '/images/agratour/agratour7.jpg', title: 'Cross-Cultural Engagement' },
    { src: '/images/agratour/agratour6.jpg', title: "Akbar's Tomb Adventure" },
    { src: '/images/agratour/agratour5.jpg', title: 'Gurudwara Blessings Trip' },
    { src: '/images/agratour/agratour4.jpg', title: 'Mehtab Bagh Excursion' },
  
   
  ];

  return (
    <>
      <div id='festival' >
      <h1

         className="text-center text-white bg-green-900 font-semibold pb-3 pt-2 tracking-tight text-lg md:text-3xl lg:text-4xl"
      >
       Cultural & Daily Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 bg-green-900 pb-20 pt-5 relative z-[-10] md:z-10  "> {/* Using flex instead of grid */}
        <div className="slider-item  "> {/* Added margin on left and right */}
          <SimpleSlider images={imagesSet1} /> {/* Passing images with titles as props */}
        </div>
        <div className="slider-item "> {/* Added margin on left and right */}
          <SimpleSlider images={imagesSet2} />
        </div>
        <div className="slider-item "> {/* Added margin on left and right */}
          <SimpleSlider images={imagesSet3} />
        </div>
        <div className="slider-item "> {/* Added margin on left and right */}
          <SimpleSlider images={imagesSet4} />
        </div>
      </div>
      </div>
    </>
  );
}
