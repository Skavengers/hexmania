"use client";
import React, { useState } from 'react'
import { FaPlay, FaInfoCircle, FaMoon} from "react-icons/fa";
import { SlPuzzle } from "react-icons/sl";
import { TbDiamond } from "react-icons/tb";
import ThemeToggle from "./ThemeToggle"
//import { MdOutlineLightMode } from "react-icons/md";
//import { useTheme } from "next-themes"

const SidebarIcon = ({ icon, text, onClick, link = "" }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick();
            setClicked(true);
        }
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <button className="sidebar-icon" onClick={handleClick} type="button">
            {icon}
            <span className="sidebar-tooltip">
                {text}
            </span>
            
        </button>
    );
};

export default function Navbar() {
    const [askRules, setAskRules] = useState(false);
    

    const handledRules = ()=>{
        setAskRules(!askRules);
    };
    return(
        <section>
            <header className="bg-primary flex flex-col items-center justify-center flex-grow dark:bg-blue-900 ">
                <h1 className='font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-cyan-500 '>
                    Hexmania
                    <span className='text-gray-500 m-1 text-sm'>v.0</span>
                </h1>
            </header>
            <nav className="fixed top-0 left-0 h-screen w-40 m-0 flex flex-col text-white shadow-lg bg-primary dark:text-black dark:bg-blue-300 cursor-pointer">
                <SidebarIcon icon={<FaPlay size="20"/>} text="Play" link="" />
                <SidebarIcon icon={<SlPuzzle size="20"/>} text="Problems" link="" />
                <SidebarIcon icon={<TbDiamond size="20"/>} text="premium" link="premium" />
                <SidebarIcon icon={<FaInfoCircle size="20"/>} text="rules" onClick={handledRules}/>
                <button className="absolute inset-x-0 bottom-0 m-6  p-3 rounded-full bg-green-500 hover:bg-green-400 text-center transition-all duration-300 shadow-md">Log in</button>
                <ThemeToggle />


            </nav>

            { askRules && 
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-white p-4 rounded-md '>
                <h1 className='flex justify-between  text-center bg-gradient-to-r from-red-800 to-blue-800 rounded-t-2xl p-2 font-extrabold text-xl'>
                    <span className='flex-1'>Rules</span>
                    <span className='ml-auto left-0 text-black border-black pr-3 cursor-pointer' onClick={handledRules}>X</span>
                </h1>
                
                <p className='bg-primary rounded-b-2xl p-4 shadow-2xl shadow-slate-900 dark:bg-white dark:text-primary'>
                Hex is hexagonal strategy game. <br />
                <br />
                <span className='font-bold'>Placing Stones:</span>
                <br />
                Players take turns placing a stone of their color on any empty hexagon. <br />
                Once a stone is placed, it cannot be moved, replaced, or removed from the board. <br />
                <br />
                <span className='font-bold'> Objective:</span>
                <br />
                Each player's goal is to create a connected path of their own color stones that links their two assigned opposite edges. <br />
                The first player to make such a connection wins the game. <br />
                <br />
                <span className='font-bold'>Swap Rule:</span>
                <br />
                To compensate for the advantage of going first, there's a swap rule. <br />
                After the first player makes their move, the second player can choose whether to switch positions with them. <br />
                </p>
                
            </div>}
        </section>
    )
}