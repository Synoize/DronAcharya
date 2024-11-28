import { BsSearch } from "react-icons/bs";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCaretDownSharp, IoReload } from "react-icons/io5";
import { useData } from "../context/data";

export const CoursePage = () => {
    const { search, setSearch, searchData } = useData();

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
                <div className="flex flex-wrap justify-start items-center sm:flex-row ~gap-8/12">
                    {
                        searchData.map((course, index) => {
                            return <div key={index} className="flex sm:flex-col gap-4">
                                <div className="w-auto sm:~w-36/64 ~h-24/48 border rounded-xl overflow-hidden">
                                    <iframe src={course.url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                                </div>
                                <div className="flex flex-col gap-1 justify-between sm:~w-36/64">
                                    <div className="line-clamp-2 sm:line-clamp-1 text-xs">{course.title}</div>
                                    <div className="line-clamp-1 text-xs flex justify-between items-center">
                                        <p>{course.update}</p>
                                        <p>{course.duration}</p>
                                    </div>
                                    <div className="line-clamp-1 text-xs">{course.lecturer}</div>
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