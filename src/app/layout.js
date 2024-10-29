
import './globals.css'

import Navbar from '@/components/navbar/Navbar';
import Carousel from '@/components/homepage/Carousel';
import FacilitiesContainer from '@/components/facilities/FacilitiesContainer';
import HolidayPage from '../components/calender/HolidaysPage';
import Festival from '../components/festival/Festival';
import ChairmanMessage from '../components/management/ChairmanMessage';
import GetInTouch from '../components/contact/GetInTouch';
import Footer from '../components/footer/Footer';
export const metadata = {
  title: 'S R Education Public School',
  description: 'Education For All',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <div >
        <Navbar  />
        <main>
        <section id="home">
            <Carousel  />
            </section>

            <section id="fecilities">
              <FacilitiesContainer />
            </section>

            <section id="holiday">
              <HolidayPage />
            </section>

            <section id="festival">
              <Festival />
            </section>

            <section id="chairman">
              <ChairmanMessage />
            </section>

            <section id="contact">
              <GetInTouch />
            </section>

            <Footer />
          </main>
        </div>

        {children}
      </body>
    </html>
  )
}