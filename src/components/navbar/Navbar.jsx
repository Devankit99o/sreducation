import Links from '@/components/navbar/link/Links';
import styles from './navBar.module.css';

const Navbar = () => {


    return (
        <div className={styles.outerNav}>
            <div className="sticky h-[200px] w-full overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/video/navbarbg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 right-0 flex flex-col justify-start items-center h-full pt-0">
                    {/* Logo */}
                    <div className="text-white font-bold">
                        <div className={styles.logo}>
                            <img src="\logo\logo.png" alt="Logo" className="w-32 h-24" />
                        </div>
                    </div>



                    {/* Organization Name */}
                    <div className="text-white text-center ">
                        <h2 className="text-3xl font-extrabold mb-0">SHREE RAM EDUCATION PUBLIC SCHOOL</h2>
                        <p className="text-sm font-medium ">HANUMAN GARI, JAGIR, MAINPURI</p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-0 z-10000">
                    <Links />
                </div>



            </div>
              
        </div>
    );
};

export default Navbar;
