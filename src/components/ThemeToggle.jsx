"use client";
import { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setIsDarkMode(true)
    }, []);
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        };
    }, [isDarkMode]);
    return(
        <div 
        className="relative w-16 h-8 flex justify-center items-center  dark:bg-gray-900 bg-teal-500 rounded-full cursor-pointeur p-1 m-2 "
        onClick={() => setIsDarkMode(!isDarkMode) }>
            <FaMoon className='text-white' size={18} />
            <div className='absolute bg-white  w-6 h-6 rounded-full shadow-md transform transition-transform duration-300' style={isDarkMode ? { left:"2px" } : { right : "2px" }} ></div>
            <BsSunFill className='ml-auto text-yellow-400' />
        </div>
    )
}
export default ThemeToggle;