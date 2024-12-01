import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminMenu } from "../components/AdminMenu";

export const AdminLayout = () => {
    return <>
    <Header/>
        <main className="flex">
            <aside className="bg-gradient-to-r from-blue-800 to-sky-700 sm:w-52 gap-2 text-primary flex flex-col p-2 ~text-sm/md" role="menu">
                <AdminMenu />
            </aside>
            <Outlet />
        </main>
    <Footer/>
    </>
}