import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { Navbar } from "./Navbar";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left sm:hidden">
            <LuMenu onClick={toggleMenu}
                className="text-2xl text-primary cursor-pointer" title="Menu" />

            {isOpen && (
                <div className="absolute right-0 mt-8 w-48 rounded-md shadow-lg bg-gradient-to-r from-blue-800 to-green-500 ring-1 ring-black ring-opacity-5">
                    <div className="gap-4  bg-slate font-semibold flex flex-col p-4 px-4 ~text-sm/lg" role="menu">
                        <Navbar />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;