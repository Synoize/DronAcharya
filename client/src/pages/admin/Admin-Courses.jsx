import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Loading } from "../../UI/Loading";

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

    // delete the contact on delete button
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
            console.log("Courses after delete: ", response.data);

            if (response.statusText) {
                getAllCourseData();
                toast.success("Course Deleted Successfully");
            } else {
                toast.warning("Course Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllCourseData();
    }, [])

    return <>
        <section className="w-full max-h-screen overflow-auto">
            <p className="px-8 pt-4 ~text-lg/xl font-semibold">Admin Contacts Data</p>
            <div className="overflow-scroll p-8">
                {
                    loading ? <Loading /> : (
                        <table className="table-auto w-full border-collapse ~text-xs/xl">
                            <thead className="border-2">
                                <tr className="text-left ">
                                    <th className="border p-2">url</th>
                                    <th className="border p-2">name</th>
                                    <th className="border p-2">title</th>
                                    <th className="border p-2">description</th>
                                    <th className="border p-2">price</th>
                                    <th className="border p-2">language</th>
                                    <th className="border p-2">lecturer</th>
                                    <th className="border p-2">update</th>
                                    <th className="border p-2">duration</th>
                                    <th className="border p-2">offer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => {
                                    const { _id, url, name, title, description, price, language, lecturer, update, duration, offer } = course;
                                    console.log("hjdhkasjdhka: ", course);

                                    return (<tr key={index} className="text-left">
                                        <td className="border p-2">{url}</td>
                                        <td className="border p-2">{name}</td>
                                        <td className="border p-2">{title}</td>
                                        <td className="border p-2">{description}</td>
                                        <td className="border p-2">{price}</td>
                                        <td className="border p-2">{language}</td>
                                        <td className="border p-2">{lecturer}</td>
                                        <td className="border p-2">{update}</td>
                                        <td className="border p-2">{duration}</td>
                                        <td className="border p-2">{offer}</td>
                                        <td className="border p-2">
                                            <button onClick={() => deleteCourse(_id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    )
                }
            </div>
        </section>
    </>
}