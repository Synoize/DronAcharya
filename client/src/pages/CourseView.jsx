import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/auth";
import { GoArrowRight } from "react-icons/go";
import axios from "axios";
import { Loading } from "../UI/Loading";

export const CourseView = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [loading, setLoading] = useState(true);
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
            const URL = `${BASE_URL}/api/data/courses/${params.id}`;
            const response = await axios.get(URL, {
                headers: {
                    Authorization: authorizationToken,
                }
            });

            console.log("get course data: ", response.data);

            setLoading(false);
            
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

    return <div className="p-6 w-full flex flex-col items-center gap-6 overflow-auto">
        <div className="w-full sm:w-96 flex items-start justify-between">
            <h1 className="font-semibold ~text-lg/xl">View Course Data</h1>

            <div className="py-2">
                <GoArrowRight onClick={handleGoBack} className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>

        <div className="sm:flex w-full sm:w-96">
            {
                loading ? <Loading /> : (
                    <div className="border p-2 rounded">
                        <div className="w-full sm:h-52 bg-contain border overflow-hidden rounded-xl">
                            <iframe src={courseData.url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                        </div>
                        <div className="flex flex-col justify-between gap-2 p-2 ">
                            <p className="~text-sm/xl font-semibold">{courseData.name}</p>
                            <p className=" ~text-xs/sm">{courseData.title}</p>

                            <div className="flex flex-col gap-1">
                                <p className=" ~text-xs/sm">Description : {courseData.description}</p>
                            </div>

                            <p className=" ~text-xs/sm">Lecturer : {courseData.lecturer}</p>
                            <p className=" ~text-xs/sm">Language : {courseData.language}</p>
                            <p className=" ~text-xs/sm">Duration : {courseData.duration}</p>
                            <p className=" ~text-xs/sm">Offer : ₹ {courseData.offer}</p>
                            <div className="flex gap-2">
                                <p className="w-full bg-green-500 font-semibold rounded text-primary text-sm flex justify-center items-center">₹ {courseData.price}</p>
                                <button className=" w-full p-2 bg-blue-500 hover:bg-blue-600 rounded text-primary ~text-xs/sm">Save</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}