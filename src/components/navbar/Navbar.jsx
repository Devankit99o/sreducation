import Links from '@/components/navbar/link/Links';
import styles from './navBar.module.css';

const Navbar = () => {


    return (
        <div className={` ${styles.sticky} ${styles.outerNav}  `}  >
            <div className="sticky h-[110px] md:h-[150px] w-full overflow-hidden" >
                {/* Background Video */}
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/video/navbarbg.mp4" type="video/mp4" />
                    video not supported
                </video>

                <div className="absolute top-0 left-0  flex flex-col justify-start items-center  md:h-full pt-0">
                    {/* Logo */}
                    <div className="text-white font-bold">
                        <div className={styles.logo}>
                            <img src="\logo\logo.png" alt="Logo" className="w-16 h-24 sm:w-32 sm:h-16 md:w-48 md:h-36" />
                        </div>
                    </div>

                </div>
                <div className="absolute top-5  right-0  md:left-0 flex flex-col justify-start items-center h-full pt-0 mb-0">
                    <div className="text-white text-center font-serif  ">
                        <h2 className=" font-medium md:font-extrabold mb-0 text-lg md:text-3xl lg:text-4xl">S R EDUCATION PUBLIC SCHOOL</h2>
                        <p className="font-light md:font-medium text-sm md:text-xl  ">HANUMAN GARI, JAGIR, MAINPURI</p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-0  pt-0 z-50">
                    <Links />
                </div>



            </div>

        </div>
    );
};

export default Navbar;
