import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AdminCoursesUpload = () => {
    const navigate = useNavigate();
    const { authorizationToken } = useAuth();
    const BASE_URL = "http://localhost:5000";

    const [loading, setLoading] = useState(false);

    const handleGoBack = () => {
        navigate(-1);
    };

    const defaultCourseData = {
        url: "",
        name: "",
        title: "",
        description: "",
        duration: "",
        language: "",
        lecturer: "",
        price: "",
        update: "",
        offer: "",
    };

    const [course, setCourse] = useState(defaultCourseData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(course);

        try {
            const URL = `${BASE_URL}/api/admin/courses/add`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(course)
            });

            const data = await response.json();
            console.log("response fron server for course ", data);
            setLoading(false);

            if (response.ok) {
                setCourse(defaultCourseData);
                toast.success(data.message);
            } else {
                toast.error(data.extraDetail);
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

    return <section className="flex flex-col gap-4 w-full items-center ~p-4/12">
        <div className="flex justify-between w-full sm:w-96">
            <h1 className="font-semibold ~text-lg/xl">Admin Course Upload</h1>
            <span className="p-1"><GoArrowRight onClick={handleGoBack} className="text-primary_special text-xl cursor-pointer" /></span>
        </div>

        <form onSubmit={handleFormSubmit} className="sm:flex w-full sm:w-96">
            <ul>
                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="url" className="font-semibold text-gray-400 text-nowrap">URL <span className="text-red-500">*</span>
                    </label>
                    <input value={course.url} onChange={handleInputChange} required autoFocus autoComplete="off" type="text" name="url" id="url" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="name" className="font-semibold text-gray-400 text-nowrap">Name <span className="text-red-500">*</span>
                    </label>
                    <input value={course.name} onChange={handleInputChange} required autoComplete="off" type="text" name="name" id="name" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="title" className="font-semibold text-gray-400 text-nowrap">Title <span className="text-red-500">*</span>
                    </label>
                    <input value={course.title} onChange={handleInputChange} required autoComplete="off" type="text" name="title" id="title" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border border-b-0 p-2 flex flex-col justify-start">
                    <label htmlFor="description" className="font-semibold text-gray-400 text-nowrap">Description <span className="text-red-500">*</span>
                    </label>
                    <input value={course.description} onChange={handleInputChange} required autoComplete="off" type="text" name="description" id="description" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="duration" className="font-semibold text-gray-400 text-nowrap">Duration <span className="text-red-500">*</span>
                    </label>
                    <input value={course.duration} onChange={handleInputChange} required autoComplete="off" type="text" name="duration" id="duration" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="language" className="font-semibold text-gray-400 text-nowrap">Language <span className="text-red-500">*</span>
                    </label>
                    <input value={course.language} onChange={handleInputChange} required autoComplete="off" type="text" name="language" id="language" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="lecturer" className="font-semibold text-gray-400 text-nowrap">Lecturer <span className="text-red-500">*</span>
                    </label>
                    <input value={course.lecturer} onChange={handleInputChange} required autoComplete="off" type="text" name="lecturer" id="lecturer" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="price" className="font-semibold text-gray-400 text-nowrap">Price <span className="text-red-500">*</span>
                    </label>
                    <input value={course.price} onChange={handleInputChange} required autoComplete="off" type="text" name="price" id="price" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="update" className="font-semibold text-gray-400 text-nowrap">Update <span className="text-red-500">*</span>
                    </label>
                    <input value={course.update} onChange={handleInputChange} required autoComplete="off" type="text" name="update" id="update" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <li className="border p-2 flex flex-col justify-start">
                    <label htmlFor="offer" className="font-semibold text-gray-400 text-nowrap">Offer <span className="text-red-500">*</span>
                    </label>
                    <input value={course.offer} onChange={handleInputChange} required autoComplete="off" type="text" name="offer" id="offer" className="outline-none font-semibold text-gray-600 sm:w-96" />
                </li>

                <button type="submit" className="w-full mt-4 p-4  bg-primary_special text-white hover:bg-red-500">Continue</button>
            </ul>
        </form>
    </section>
}