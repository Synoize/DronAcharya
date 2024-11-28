import { NavLink } from "react-router-dom"
import { Navbar } from "./Navbar";
import DropdownMenu from "./Dropdown";
import { useData } from "../context/data";

export const Header = () => {
    const {appData} = useData();
    return (
        <header className=" w-full ~h-14/24 ~p-6/8 flex justify-between items-center bg-gradient-to-r from-blue-800 to-green-500 shadow-2xl shadow-white">
            <NavLink to="/" className="flex items-center gap-2 ">
                <img src={appData.img} alt={appData.name} id="logo" className="~w-10/16 " />
                <p className="~text-xl/3xl text-primary font-semibold ">{appData.name}</p>
            </NavLink>
            <nav>
                <div className=" hidden ~gap-4/8 sm:flex ~text-sm/lg">
                    <Navbar />
                </div>
                <DropdownMenu />
            </nav>
        </header>
    );
}