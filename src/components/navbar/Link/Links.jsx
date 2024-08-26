"use client";
import Link from "next/link";
import styles from './navLink.module.css';
import { useState } from "react";
const links = [
    {
        path: "/Home",
        title: "Home"

    },
    {
        path: "/About",
        title: "About"

    },
    {
        path: "/Academics",
        title: "Academics"

    },
    {
        path: "/Achievement",
        title: "Achievement"

    },
    {
        path: "/Facilities",
        title: "Facilities"

    },
    {
        path: "/Messages",
        title: "Guiding Thoughts"

    },
    {
        path: "/Gallery",
        title: "Gallery"

    },
    {
        path: "/Contact",
        title: "Contact"
    }
]




const Links = () => {
    const [open, setOpen] = useState(false);
    return (
        <div >

            <div className={styles.links}>
                <div className="flex justify-start  space-x-10  p-3 bg-dark-green rounded-md">
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            key={link.title}
                            className="text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 ease-in-out"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

            </div>

            <div className="flex justify-center">
    <div className={styles.menuButton}>
        <button
            onClick={() => setOpen((prev) => !prev)}
            className="relative w-32 h-8 flex flex-col justify-between items-center bg-transparent border-none cursor-pointer"
            aria-expanded={open}
        >
            <span
                className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${
                    open ? 'rotate-300  translate-y-2 bg-blue-700' : ''
                }`}
            ></span>
            <span
                className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${
                    open ? 'opacity-0' : ''
                }`}
            ></span>
            <span
                className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${
                    open ? 'rotate-60 -translate-y-2 bg-blue-700' : ''
                }`}
            ></span>
        </button>
    </div>
</div>

{open && (
    <div className={styles.mobileLink}>
        <div className="relative ">
            <div
                className="fixed top-0 right-0 h-full w-32 bg-opacity-50  border-gray-300 transform transition-transform duration-300 ease-in-out z-[11000] "
                style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
            >
                {links.map((link, index) => (
                    <div
                        key={link.title}
                        className={`flex items-center ${index !== links.length - 1 ? 'border-b border-white-300' : ''}`}
                    >
                        <Link
                            href={link.path}
                            className="text-white text-center bg-green-900 py-4 text-sm font-medium  hover:text-red-600 transition duration-300 ease-in-out w-full"
                        >
                            {link.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
)}


        </div>
    );



}

export default Links;