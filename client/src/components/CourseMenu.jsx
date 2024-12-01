import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
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

            <NavLink to="/courses/dashboard" style={getActivePage} className="flex flex-col sm:flex-row p-4justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><LuLayoutDashboard className="text-lg"/><p className="~text-xs/lg hidden sm:block">Dashboard</p></NavLink>
            
            <NavLink to="/courses/playlist" style={getActivePage} className="flex flex-col sm:flex-row p-4justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><MdOutlineSubscriptions className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Playlist</p></NavLink>

            <NavLink to="/courses/history" style={getActivePage} className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><MdHistory className="text-xl"/><p className="~text-xs/lg hidden sm:block">History</p></NavLink>
        </>
    );
}