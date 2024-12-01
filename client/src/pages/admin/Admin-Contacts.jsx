import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";
import { Loading } from "../../UI/Loading";

export const AdminContacts = () => {
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([])
    const { authorizationToken } = useAuth();
    const BASE_URL = "http://localhost:5000";

    const getAllContactData = async () => {
        try {
            const URL = `${BASE_URL}/api/admin/contacts`;
            const response = await axios(URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            console.log("contacts : ", response.data);
            setContacts(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // delete the contact on delete button
    const deleteContact = async (id) => {
        setLoading(true);
        try {
            const URL = `${BASE_URL}/api/admin/contacts/delete/${id}`;
            const response = await axios(URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });
            console.log("contacts after delete: ", response.data);

            if (response.statusText) {
                getAllContactData();
                toast.success("Contact Deleted Successfully");
            } else {
                toast.warning("Contact Not Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContactData();
    }, [])

    return <>
        <section className="w-full max-h-screen overflow-auto ~p-4/12">
            <p className="~text-lg/xl font-semibold pb-4">Admin Contacts Data</p>
            <div className="overflow-scroll h-lvh">
                {
                    loading ? <Loading /> : (
                        <table className="table-auto w-full border-collapse ~text-xs/xl">
                            <thead className="border-2">
                                <tr className="text-left text-nowrap">
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Phone</th>
                                    <th className="border p-2">Message</th>
                                    <th className="border p-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((currContact, index) => {
                                    const { _id, fullname, email, phone, message } = currContact;
                                    return (<tr key={index} className="text-left">
                                        <td className="border p-2">{fullname}</td>
                                        <td className="border p-2">{email}</td>
                                        <td className="border p-2">{phone}</td>
                                        <td className="border p-2">{message}</td>
                                        <td className="border p-2">
                                            <button onClick={() => deleteContact(_id)} className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">Delete</button>
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