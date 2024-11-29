import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { useState } from "react";

export const CourseMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const openMenuPage = (isOpen) => {
    //     return {
    //         display: isOpen ? "hidden": "block" 
    //     }
    // }

    const getActivePage = ({ isActive }) => {
        return {
            color: isActive ? "orange" : "white",
        }
    }

    return (
        <>
            <div onClick={toggleMenu} className="flex justify-center items-start w-10 p-2 sm:m-2 rounded bg-slate-100 bg-opacity-90 hover:bg-opacity-100">
                <LuMenu className="text-gray-900 text-xl cursor-pointer"/>
            </div>
            
            <NavLink to="/" style={getActivePage} title="Subscriptions" className="flex justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><MdOutlineSubscriptions className="text-lg"/><p className="hidden sm:block ">Subscriptions</p></NavLink>

            <NavLink to="/" style={getActivePage} title="Downloads" className="flex justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><BsDownload className="text-lg"/><p className="hidden sm:block">Downloads</p></NavLink>

            <NavLink to="/" style={getActivePage} title="Dashboard" className="flex justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><LuLayoutDashboard className="text-lg"/><p className="hidden sm:block">Dashboard</p></NavLink>

            <NavLink to="/courses/history" style={getActivePage} title="History" className="flex justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><MdHistory className="text-xl"/><p className="hidden sm:block">History</p></NavLink>

            <NavLink to="/courses/watch-later" style={getActivePage} title="Watch Later" className="flex justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><MdOutlineWatchLater className="text-lg"/><p className="hidden sm:block">Watch Later</p></NavLink>

            
        </>
    );
}