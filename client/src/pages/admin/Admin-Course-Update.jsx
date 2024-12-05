import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { Loading } from "../../UI/Loading";

export const AdminCourseUpdate = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [loading, setLoading] = useState(false);
    const BASE_URL = "http://localhost:5000";

    const [courseData, setCourseData] = useState({
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
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    // get single course data 
    const getSingleCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/admin/courses/${params.id}`;
            const response = await axios.get(URL, {
                headers: {
                    Authorization: authorizationToken,
                }
            });

            console.log("get course data: ", response.data);

            setCourseData({
                url: response.data.url,
                name: response.data.name,
                title: response.data.title,
                description: response.data.description,
                duration: response.data.duration,
                language: response.data.language,
                lecturer: response.data.lecturer,
                price: response.data.price,
                update: response.data.update,
                offer: response.data.offer,
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleCourseData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(courseData);

        try {
            const URL = `${BASE_URL}/api/admin/courses/update/${params.id}`;
            const response = await fetch(URL, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(courseData)
            });

            console.log("Update :", response);
            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                setCourseData({
                    url: courseData.url,
                    name: courseData.name,
                    title: courseData.title,
                    description: courseData.description,
                    duration: courseData.duration,
                    language: courseData.language,
                    lecturer: courseData.lecturer,
                    price: courseData.price,
                    update: courseData.update,
                    offer: courseData.offer,
                });
                toast.success(data.message ? data.message : "Updated Successfully");
            } else {
                toast.error(data.extraDetail ? data.extraDetail : "Not Updated");
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    return <div className="w-full flex flex-col items-center gap-4 overflow-auto ~p-4/12">
        <div className="w-full sm:w-96 flex items-start justify-between">
            <h1 className="font-semibold ~text-lg/xl">Update Course Data</h1>

            <div className="py-2">
                <RxCross1 onClick={handleGoBack} className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>

        <form onSubmit={handleUpdate} className="sm:flex w-full sm:w-96">
            {
                loading ? <Loading /> : (
                    <ul>
                        <li className="border border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="url" className="font-semibold text-gray-400 text-nowrap">URL <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.url} onChange={handleInputChange} required autoFocus autoComplete="off" type="text" name="url" id="url" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="name" className="font-semibold text-gray-400 text-nowrap">Name <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.name} onChange={handleInputChange} required autoComplete="off" type="text" name="name" id="name" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="title" className="font-semibold text-gray-400 text-nowrap">Title <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.title} onChange={handleInputChange} required autoComplete="off" type="text" name="title" id="title" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="description" className="font-semibold text-gray-400 text-nowrap">Description <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.description} onChange={handleInputChange} required autoComplete="off" type="text" name="description" id="description" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="duration" className="font-semibold text-gray-400 text-nowrap">Duration <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.duration} onChange={handleInputChange} required autoComplete="off" type="text" name="duration" id="duration" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="language" className="font-semibold text-gray-400 text-nowrap">Language <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.language} onChange={handleInputChange} required autoComplete="off" type="text" name="language" id="language" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="lecturer" className="font-semibold text-gray-400 text-nowrap">Lecturer <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.lecturer} onChange={handleInputChange} required autoComplete="off" type="text" name="lecturer" id="lecturer" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="price" className="font-semibold text-gray-400 text-nowrap">Price <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.price} onChange={handleInputChange} required autoComplete="off" type="text" name="price" id="price" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="update" className="font-semibold text-gray-400 text-nowrap">Update <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.update} onChange={handleInputChange} required autoComplete="off" type="text" name="update" id="update" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <li className="border p-2 flex flex-col justify-start">
                            <label htmlFor="offer" className="font-semibold text-gray-400 text-nowrap">Offer <span className="text-red-500">*</span>
                            </label>
                            <input value={courseData.offer} onChange={handleInputChange} required autoComplete="off" type="text" name="offer" id="offer" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>

                        <button type="submit" className="w-full mt-4 p-4  bg-special_blue text-white hover:bg-blue-600">Update</button>
                    </ul>
                )
            }
        </form>
    </div>
}