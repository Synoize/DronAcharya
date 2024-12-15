import { GoArrowRight } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const navigate = useNavigate();
    const BASE_URL = "http://localhost:5000";

    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();

    const handleGoBack = () => {
        navigate(-1);
    };

    const defaultUserData = {
        fullname: `${user.fullname}`,
        email: user.email,
        phone: String(user.phone),
        message: "",
    };

    const [contact, setContact] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });

    if (userData && user) {
        setContact(defaultUserData);
        setUserData(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(contact);

        try {
            const URL = `${BASE_URL}/api/form/contact`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contact)
            });

            const res_data = await response.json();
            console.log("response fron server for contact ", res_data);
            setLoading(false);
            
            if (response.ok) {
                setContact(defaultUserData);
                toast.success(res_data.message);
            } else {
                toast.error(res_data.extraDetail);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // loading after fetching data
    if (loading) {
        return <div className="w-full h-lvh flex justify-center items-center">
            Uploading...
        </div>
    }

    return <section className="flex flex-col gap-10 items-center ~p-4/12">
        <div className="flex justify-between w-full sm:w-96">
            <div>
                <h1 className="font-semibold text-xl">Contact Us</h1>
                <NavLink to="/login" className="text-sm font-semibold ">or <p className="text-special_blue">login to your account</p></NavLink>
            </div>

            <div className="p-2">
                <GoArrowRight onClick={handleGoBack} className="text-red-500 text-xl cursor-pointer"/>
            </div>
        </div>

        <form onSubmit={handleFormSubmit} className="sm:flex w-full sm:w-96">
            <ul>
                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="fullname" className="font-semibold text-gray-400 text-nowrap">Full Name <span className="text-red-500">*</span>
                    </label>
                    <input value={contact.fullname} onChange={handleInputChange} required autoComplete="off" type="name" name="fullname" id="fullname" className="outline-none font-medium text-gray-600 sm:w-96" />
                </li>
                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="email" className="font-semibold text-gray-400">Email <span className="text-red-500">*</span></label>
                    <input value={contact.email} onChange={handleInputChange} required autoComplete="off" type="email" name="email" id="email" className="outline-none font-medium text-gray-600" />
                </li>
                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="phone" className="font-semibold text-gray-400 text-nowrap">Phone <span className="text-red-500">*</span></label>
                    <input value={contact.phone} onChange={handleInputChange} required autoComplete="off" maxLength={1} type="number" name="phone" id="phone" className="outline-none font-medium text-gray-600" />
                </li>
                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="messgae" className="font-semibold text-gray-400">Comment <span className="text-red-500">*</span></label>
                    <textarea value={contact.message} onChange={handleInputChange} required autoFocus autoComplete="off" name="message" id="message" rows={5} className="scroll_yh outline-none font-medium text-gray-600"></textarea>
                </li>

                <button type="submit" className="w-full mt-4 p-4 bg-special_blue text-white hover:bg-blue-600">Continue</button>
            </ul>
        </form>
    </section>
}