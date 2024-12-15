import { Outlet } from "react-router-dom";
import { CourseMenu } from "../components/CourseMenu";

export const CourseLayout = () => {
    return <>
        <main className="flex">
            <aside className="bg-special_blue min-h-screen sm:w-52 gap-1 text-primary flex flex-col p-2 ~text-sm/md" role="menu">
                <CourseMenu />
            </aside>
            <Outlet />
        </main>
    </>
}