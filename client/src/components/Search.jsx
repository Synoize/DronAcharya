import { BsSearch } from "react-icons/bs";
import { useData } from "../context/data";

export const Search = () => {
    const { search, setSearch } = useData();

    return <div className="flex w-full justify-center ~p-4/8 absolute">
        <form className="border p-2 px-4 flex justify-between items-center gap-1 rounded w-full sm:w-3/5">
            <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" name="search" id="search" placeholder="Search cources" autoFocus className="outline-none text-white w-full bg-transparent" />
            <button type="submit"><BsSearch className="text-white" /></button>
        </form>
    </div>
}