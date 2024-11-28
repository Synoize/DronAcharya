import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useData } from "../context/data";

export const Footer = () => {
    const {appData} = useData();

    return (
        <footer>
            <div className="py-8 bg-secondary sm:~px-6/36">
                <div className="sm:flex sm:justify-between text-gray-400">
                    <div>
                        <NavLink to="/" className="w-10 ml-8 flex items-center gap-2 ">
                            <img src={appData.img} alt={appData.name} id="logo" className="w-10" />
                            <p className="text-secondary text-xl font-semibold">{appData.name}</p>
                        </NavLink>

                        <div>
                            <div className="flex flex-col text-lg pl-8 p-4">
                                <Link className="hover:text-secondary_color">About Us</Link>
                                <Link className="hover:text-secondary_color">How it Works</Link>
                            </div>

                            <ul className="flex flex-col text-lg pl-8">
                                <li><Link className="hover:text-secondary_color">Blog's</Link></li>
                                <li><Link className="hover:text-secondary_color">Privacy Policy</Link></li>
                                <li>
                                    <NavLink to={"/contact"} className="flex items-center gap-2 hover:text-secondary_color">Contact Us<MdOutlineContactSupport /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl text-secondary_color pl-8 pt-6">Top Insurances</h1>
                        <ul className="flex flex-col text-lg pl-8 p-4">
                            <li><Link className="hover:text-secondary_color">Services</Link></li>
                            <li><Link className="hover:text-secondary_color">Contents</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col pl-8 p-4 gap-6">
                        <h1 className="text-xl text-secondary_color">Follow US</h1>
                        <div className="flex flex-row gap-2 ">
                            <Link className="p-2 rounded-full hover:bg-secondary_special">
                                <FaFacebookF title="Facebook" className="clickEffect text-xl text-blue-700" />
                            </Link>
                            <Link className="p-2 rounded-full hover:bg-secondary_special">
                                <FaInstagram title="Instagram" className="clickEffect text-xl text-pink-600" />
                            </Link>
                            <Link className="p-2 rounded-full hover:bg-secondary_special">
                                <FaLinkedinIn title="LinkedIn" className="clickEffect text-xl text-blue-800" />
                            </Link>
                            <Link className="p-2 rounded-full hover:bg-secondary_special">
                                <FaYoutube title="YouTube" className="clickEffect text-xl text-red-600" />
                            </Link>
                            <Link className="p-2 rounded-full hover:bg-secondary_special">
                                <RiTwitterXLine title="X" className="clickEffect text-xl text-stone-900" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full p-4 bg-gray-100 flex flex-col justify-around items-center gap-2 sm:flex-row">
                <p className="text-sm text-gray-800">All rights reserved by {appData.name}.com 2024</p>

                <span className="flex gap-4 text-xs text-slate-600 sm:text-sm">
                    <p className="text-blue-800">Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </span>
            </div>
        </footer>
    )
}