import { Outlet } from "react-router-dom";
import { CourseMenu } from "../components/CourseMenu";

export const CourseLayout = () => {
    return <>
        <main className="flex">
            <aside className="bg-gradient-to-r from-blue-800 to-sky-700 min-h-screen sm:w-52 gap-3 text-primary flex flex-col p-2 ~text-sm/md" role="menu">
                <CourseMenu />
            </aside>
            <Outlet />
        </main>
    </>
}