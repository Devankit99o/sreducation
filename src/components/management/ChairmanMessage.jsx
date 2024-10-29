'use client';
import Image from 'next/image';

export default function ChairmanMessage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white text-black-700 bg relative z-[-1]" id='chairman'>
      <div className=" p-4 bg-gray-100 rounded-md flex flex-col justify-center"> {/* Light grey background */}
        <h3 className="font-serif text-xl md:text-2xl font-semibold mb-1">Pramod Yadav</h3> {/* Name */}
        <p className="font-serif text-base md:text-lg font-semibold mb-10">Founding Chairman & Managing Director, S R Education Public School</p> {/* Title */}
        <p className="text-base md:text-lg font-serif mb-2"> {/* Change font size for mobile */}
          At S R Education Public School, we believe in "Education for All," focusing on the holistic development of every child through academics, extracurricular activities, and sports while investing in continuous teacher training to inspire confidence and trust. We instill respect for tradition and discipline, shaping well-rounded individuals ready to face life's challenges, and we invite your active participation in empowering our students to achieve their fullest potential.
        </p> 
        <p className="text-base md:text-lg font-serif mb-8"> {/* Change font size for mobile */}
          Our mission is to create a supportive environment where every student is valued and motivated to excel. Through strong collaboration between parents, educators, and students, we ensure each child's growth is nurtured with care and dedication.
        </p>
      </div>

      <div className="md:w-1/3 relative w-full h-[300px] md:h-[400px]  flex-shrink-0">
        <Image
          src="/images/mng.jpg" // Replace with your image path
          alt="Chairman"
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>
    </div>
  );
}
