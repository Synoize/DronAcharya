import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdminMenu } from "../components/AdminMenu";

export const AdminLayout = () => {
    return <>
    <Header/>
        <main className="flex">
            <aside className="bg-special_blue sm:w-52 gap-1 text-primary flex flex-col p-2 ~text-sm/md" role="menu">
                <AdminMenu />
            </aside>
            <Outlet />
        </main>
    <Footer/>
    </>
}