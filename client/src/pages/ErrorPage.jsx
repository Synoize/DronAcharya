import { GoArrowLeft } from "react-icons/go";
import { HiOutlineHome } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";

export const ErrorPage = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return <section className="w-full h-lvh flex justify-center items-center flex-col sm:flex row ">
       <iframe src="https://lottie.host/embed/1fedef1a-992c-4d1c-8936-54bda9e74817/vO1LJvxkqU.json"></iframe>

        <div className="flex gap-4">
            <button onClick={handleGoBack} className="flex items-center gap-2 p-2 px-4 bg-red-600 border-2 rounded text-white ~text-xs/xl hover:bg-white hover:text-black"><GoArrowLeft />Go Back </button>

            <NavLink to="/" className="flex items-center gap-2 p-2 px-4 bg-red-600 border-2 rounded text-white ~text-xs/xl hover:bg-white hover:text-black"> <HiOutlineHome />Go Back to Home Page</NavLink>
        </div>
    </section>
}