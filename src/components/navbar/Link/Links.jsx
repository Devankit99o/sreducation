"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from './navLink.module.css';

const links = [
    { path: "/Home", title: "Home", targetId: "home" },
    { path: "/Facilities", title: "Facilities", targetId: "facilities" },
    { path: "/Event", title: "Event", targetId: "holiday" },
    { path: "/Gallery", title: "Gallery", targetId: "festival" },
    { path: "/Messages", title: "Guiding Thoughts", targetId: "chairman" },
    { path: "/Contact", title: "Contact", targetId: "contact" }
];

const Links = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const handleScroll = (e, targetId, path) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (path) {
            window.history.pushState(null, '', `${path}`);
        }
    };

    useEffect(() => {
        // Redirect to "/" if not already there
        if (window.location.pathname !== '/') {
            window.location.href = '/'; // Redirect to the home page
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="sticky top-0 z-50 bg-dark-green">
            <div className={styles.links}>
                <div className="flex justify-start space-x-10 p-3 rounded-md">
                    {links.map((link) => (
                        <a
                            href={link.path}
                            key={link.title}
                            onClick={(e) => {
                                if (link.targetId) {
                                    handleScroll(e, link.targetId, link.path);
                                }
                            }}
                            className="text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 ease-in-out"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <div className={styles.menuButton}>
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="relative w-24 h-6 flex flex-col justify-between items-center bg-transparent border-none cursor-pointer"
                        aria-expanded={open}
                    >
                        <span className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${open ? 'rotate-300 translate-y-2 bg-blue-600' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-green-900 transform transition duration-300 ease-in-out ${open ? 'rotate-60 -translate-y-2 bg-blue-600' : ''}`}></span>
                    </button>
                </div>
            </div>

            {open && (
                <div className={styles.mobileLink}>
                    <div
                        className="fixed top-0 right-0 h-[40%] w-32 bg-opacity-50 border-gray-300 transform transition-transform duration-300 ease-in-out"
                        style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
                    >
                        {links.map((link, index) => (
                            <div
                                key={link.title}
                                className={`flex items-center ${index !== links.length - 1 ? 'border-b border-white-300' : ''}`}
                            >
                                <a
                                    href={link.path}
                                    onClick={(e) => {
                                        if (link.targetId) {
                                            handleScroll(e, link.targetId, link.path);
                                        }
                                    }}
                                    className="text-white text-center bg-green-900 py-4 text-sm font-medium hover:text-red-600 transition duration-300 ease-in-out w-full"
                                >
                                    {link.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Links;
