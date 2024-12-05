import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Loading } from "../../UI/Loading";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";

export const AdminCourses = () => {
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([])
    const { authorizationToken } = useAuth();
    const BASE_URL = "http://localhost:5000";

    const getAllCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/admin/courses`;
            const response = await axios(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            console.log("courses : ", response.data.msg);
            setCourses(response.data.msg);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // delete the course on delete button
    const deleteCourse = async (id) => {
        setLoading(true);
        try {
            const URL = `${BASE_URL}/api/admin/courses/delete/${id}`;
            const response = await axios(URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            console.log("courses after delete: ", response.data);

            if (response.statusText) {
                toast.success("Deleted Successfully")
                getAllCourseData();
            } else {
                toast.warning("Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCourseData();
    }, [])

    return <>
        <section className="w-full max-h-screen overflow-auto ~p-4/12">
            <p className="~text-lg/xl font-semibold pb-4">Admin Courses Data</p>
            {
                loading ? <Loading /> : (
                    <div className="overflow-y-scroll w-full h-lvh ">
                        <div className="flex flex-wrap justify-start items-center sm:flex-row ~gap-4/12">
                            {
                                courses.map((course, index) => {
                                    const { _id, url, name, duration, lecturer } = course;

                                    return <div key={index} className="flex sm:flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                                        <div className="w-3/6 sm:~w-36/64 ~h-28/48 border  overflow-hidden rounded-xl">
                                            <iframe src={url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                        </div>
                                        <div className="flex flex-col justify-between gap-2 p-2 w-3/6 sm:~w-36/64">
                                            <Link to={`/admin/course/${_id}/view`} className="flex flex-col gap-0.5">
                                                <p className="line-clamp-1 ~text-sm/xl font-semibold">{name}</p>
                                                <p className="text-xs text-green-600">{duration}</p>
                                                <p className=" ~text-xs/sm">{lecturer}</p>
                                            </Link>

                                            <div className="flex gap-2">
                                                <Link to={`/admin/course/${_id}/edit`} className="w-full p-2 bg-special_blue hover:bg-blue-600 rounded text-center text-primary ~text-xs/sm">Edit</Link>

                                                <button onClick={() => deleteCourse(_id)} className="w-full p-2 bg-red-500 hover:bg-red-600 rounded text-primary ~text-xs/sm">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <p className="w-full flex text-center justify-center items-center gap-2 ~pt-8/12 text-gray-400 ">More Not Available <IoReload /></p>
                    </div>
                )
            }
        </section>
    </>
}