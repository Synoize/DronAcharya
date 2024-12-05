import { BsSearch } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCaretDownSharp, IoReload } from "react-icons/io5";
import { useData } from "../context/data";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CoursePage = () => {
    const { search, setSearch, searchData } = useData();

    const [saveCourse, setSaveCourse] = useState(new Set([1]))
    const handleCourseSave = () => {
        console.log(saveCourse(0));

    }

    return <>
        <div className="w-full flex flex-col">
            <div className="w-full ~h-14/20 flex justify-between items-center gap-2 ~p-4/8 ">
                <div className="p-2 px-4 border flex justify-between items-center gap-2 rounded ~text-xs/lg">
                    <HiOutlineAdjustmentsHorizontal />filter<IoCaretDownSharp />
                </div>
                <form className="border p-2 px-4 flex justify-between items-center gap-1 rounded w-3/5 sm:w-2/5 ~text-xs/lg">
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" name="search" id="search" placeholder="Search cources" className="outline-none text-secondary w-full bg-transparent" />
                    <button type="submit"><BsSearch className="text-secondary" /></button>
                </form>
            </div>

            <div className="overflow-y-scroll w-full h-lvh border ~p-4/12">
                <div className="flex flex-wrap justify-start items-center sm:flex-row ~gap-4/12">
                    {
                        searchData.map((course, index) => {

                            const { _id, url, name, duration, lecturer } = course;

                            return <div key={index} className="flex sm:flex-col gap-3 sm:p-2 border rounded-xl overflow-hidden">
                                <div className="w-3/6 sm:~w-36/64 ~h-28/48 border overflow-hidden rounded-xl">
                                    <iframe src={url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                </div>
                                <div className="flex flex-col justify-between gap-2 p-2 w-3/6 sm:~w-36/64">
                                    <Link to={`/courses/${_id}/view`} className="flex flex-col gap-0.5">
                                        <p className="line-clamp-1 ~text-sm/xl font-semibold">{name}</p>
                                        <p className="text-xs text-green-600">{duration}</p>
                                        <p className=" ~text-xs/sm">{lecturer}</p>
                                    </Link>

                                    <div className="flex gap-2">
                                        <Link to={`/courses/${_id}/view`} className=" w-full p-2 bg-blue-500 hover:bg-blue-600 rounded text-primary text-center ~text-xs/sm">View</Link>
                                        <button onClick={handleCourseSave} className="w-full p-2 bg-green-500 hover:bg-green-600 rounded text-primary ~text-xs/sm">Save</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <p className="w-full flex text-center justify-center items-center gap-2 ~pt-8/12 text-gray-400 ">More Not Found<IoReload /></p>
            </div>
        </div>
    </>
}