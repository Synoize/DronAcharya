import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";

export const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openMenuPage = (isOpen) => {
        return {
            display: isOpen ? "hidden": "block" 
        }
    }

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
            
            <NavLink to="/admin/users" style={getActivePage} title="Users" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><HiOutlineUser className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Users</p></NavLink>

            <NavLink to="/admin/contacts" style={getActivePage} title="Contacts" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><IoIosContacts className="text-lg"/><p className="~text-xs/lg hidden sm:block ">Contacts</p></NavLink>

            <NavLink to="/admin/courses" style={getActivePage} title="Courses" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><FaLaptopCode className="text-lg"/><p className="~text-xs/lg hidden sm:block">Courses</p></NavLink>

            <NavLink to="/admin/course/upload" style={getActivePage} title="Upload" className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-2 p-2 rounded hover:bg-blue-800 "><RiVideoAddLine className="text-lg"/><p className="~text-xs/lg hidden sm:block">Upload</p></NavLink>
        </>
    );
}