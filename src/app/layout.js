
import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Carousel from '@/components/homepage/Carousel';

export const metadata = {
  title: 'Shree Ram Public School',
  description: 'Education For All',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
     
      <body>
      <div >
      <Navbar/>
      <Carousel/>
      </div>
    
      {children}</body>
    </html>
  )
}