
import HolidayCards from './Holidays';
import { fetchHolidays } from '../services/calendarService';
import styles from './holiday.module.css'; // Import CSS module

export default async function HolidayPage() {
  const events = await fetchHolidays();  // Fetch the holidays on the server

  return (
    <>
    <div id='holiday'>
 <h1
 className="text-center text-black bg-gray-100 font-semibold pb-3 pt-2 tracking-tight text-xl md:text-3xl lg:text-4xl"

>
  Events & Important Dates
</h1>
    <div className="flex space-x-6 flex-wrap justify-center   items-center bg-gray-100 pb-5 relative z-[-1]">
      
        {events && events.length > 0 ? (
          events.slice(0, 4).map((event, index) => (
            <li key={index} className="list-none  rounded-lg" >
              <HolidayCards event={event} /> 
            </li>
          ))
        ) : (
          <li>No holidays found.</li>
        )}
      
    </div>
    </div>
    </>
  );
}
