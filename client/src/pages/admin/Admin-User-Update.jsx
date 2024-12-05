import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { Loading } from "../../UI/Loading";

export const AdminUserUpdate = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const [loading, setLoading] = useState(false);
    const BASE_URL = "http://localhost:5000";
    const [userData, setUserData] = useState({
        username: "",
        fullname: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const { authorizationToken } = useAuth();

    // get single user data 
    const getSingleUserData = async () => {
        try {
            const URL = `${BASE_URL}/api/admin/users/${params.id}`;
            const response = await axios.get(URL, {
                headers: {
                    Authorization: authorizationToken,
                }
            });

            // const userData = await response.data;
            console.log("get user data: ", response.data);

            setUserData({
                username: response.data.username,
                fullname: response.data.fullname,
                email: response.data.email,
                phone: String(response.data.phone),
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(userData);

        try {
            const URL = `${BASE_URL}/api/admin/users/update/${params.id}`;
            const response = await fetch(URL, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(userData)
            });

            console.log("Update :", response);
            const data = await response.json();
            setLoading(false);

            if (response.ok) {
                setUserData({
                    username: userData.username,
                    fullname: userData.fullname,
                    email: userData.email,
                    phone: String(userData.phone),
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
            <h1 className="font-semibold ~text-lg/xl">Update User Data</h1>

            <div className="py-2">
                <RxCross1 onClick={handleGoBack} className="text-red-500 text-xl cursor-pointer" />
            </div>
        </div>

        <form onSubmit={handleUpdate} className="sm:flex w-full sm:w-96">
            {
                loading ? <Loading /> : (
                    <ul>
                        <li className="border-2 border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="fullname" className="font-semibold text-gray-400 text-nowrap">Userame <span className="text-red-500">*</span>
                            </label>
                            <input value={userData.username} onChange={handleInputChange} required autoComplete="off" type="name" name="username" id="username" className="outline-none font-semibold text-gray-600 sm:w-96" />
                        </li>
                        <li className="border-2 border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="fullname" className="font-semibold text-gray-400 text-nowrap">Full Name <span className="text-red-500">*</span>
                            </label>
                            <input value={userData.fullname} onChange={handleInputChange} required autoComplete="off" type="name" name="fullname" id="fullname" className="outline-none font-semibold text-gray-600" />
                        </li>
                        <li className="border-2 border-b-0 p-2 flex flex-col justify-start">
                            <label htmlFor="email" className="font-semibold text-gray-400">Email <span className="text-red-500">*</span></label>
                            <input value={userData.email} onChange={handleInputChange} required autoComplete="off" type="email" name="email" id="email" className="outline-none font-semibold text-gray-600" />
                        </li>
                        <li className="border-2 p-2 flex flex-col justify-start">
                            <label htmlFor="phone" className="font-semibold text-gray-400 text-nowrap">Phone <span className="text-red-500">*</span></label>
                            <input value={userData.phone} onChange={handleInputChange} required autoComplete="off" type="number" name="phone" id="phone" className="outline-none font-semibold text-gray-600" />
                        </li>

                        <button type="submit" className="w-full mt-4 p-4  bg-special_blue text-white hover:bg-blue-600 clickEffect">Update</button>
                    </ul>
                )
            }
        </form>
    </div>
}