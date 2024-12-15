import { Link, NavLink } from "react-router-dom";
import { Search } from "../components/Search";
import { useData } from "../context/data";
import { FaFeatherPointed } from "react-icons/fa6";

export const Home = () => {
    const { courseData } = useData();

    return <main>
        <section>

            <NavLink to="/courses/dashboard"><Search /></NavLink>
            <img src="cover.svg" alt="" className="w-full opacity-100 inset-0" />

        </section>

        <section className="flex flex-col ~gap-8/12 ~p-8/20 bg-secondary">
            <h2 className="~text-lg/4xl text-nowrap text-primary font-bold">ANYONE CAN BE ANYTHING !!!</h2>
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center sm:items-start ~gap-8/12 ">
                <span>
                    <iframe src="https://lottie.host/embed/76b83385-f50c-4f9c-a51c-7793fd3ec66b/e7ejUEIo1W.lottie" className="~w-56/96 ~h-40/56"></iframe>
                </span>
                <p className="~text-lg/2xl text-center sm:text-start text-primary sm:w-3/5">In DronAcharya anyone can be anything, a teacher can be a student a student can be a teacher or vice versa. Learn from teachers are who are passionate in their field to grow and level up yourselves.</p>
            </div>
        </section>

        <section className="flex flex-col ~gap-8/20 ~p-8/20 bg-gradient-to-b from-secondary to-special_blue ">
            <h1 className="~text-lg/4xl text-primary font-semibold">TRENDING COURSES</h1>
            <div className="flex flex-col justify-center items-center sm:flex-row ~gap-8/20">

                <Link to={`/courses/${courseData[0]._id}/view`} className="flex flex-col gap-4">
                    <div className="~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                        <iframe src={courseData[0].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                    </div>
                    <div className="flex flex-col gap-2 ~w-48/80">
                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[0].name}</p>
                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[0].title}</p>
                    </div>
                </Link>

                <Link to={`/courses/${courseData[0]._id}/view`} className="flex flex-col gap-4">
                    <div className="~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                        <iframe src={courseData[0].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                    </div>
                    <div className="flex flex-col gap-2 ~w-48/80">
                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[0].name}</p>
                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[0].title}</p>
                    </div>
                </Link>

                <Link to={`/courses/${courseData[0]._id}/view`} className="flex flex-col gap-4">
                    <div className="~w-48/80 ~h-36/52 border overflow-hidden rounded-xl">
                        <iframe src={courseData[0].url} frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full"></iframe>
                    </div>
                    <div className="flex flex-col gap-2 ~w-48/80 ">
                        <p className="line-clamp-1 text-primary ~text-sm/xl font-semibold">{courseData[0].name}</p>
                        <p className="text-sm text-gray-200 line-clamp-2">{courseData[0].title}</p>
                    </div>
                </Link>
            </div>
        </section>

        <section className="flex flex-col ~gap-8/20 ~p-8/20 bg-gradient-to-b from-special_blue to-secondary  ">
            <h1 className="~text-lg/4xl text-primary font-semibold">WHY CHOOSE DRONACHARYA OF ALL  ???</h1>
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center sm:items-start ~gap-8/12">
                <span>
                    <iframe src="https://lottie.host/embed/76b83385-f50c-4f9c-a51c-7793fd3ec66b/e7ejUEIo1W.lottie" className="~w-56/96 ~h-40/56"></iframe>
                </span>
                <div className="flex flex-col gap-4 ~text-lg/2xl text-primary">
                    <p className="line-clamp-1"><li>Anyone can be a learner as well as the teacher.</li></p>
                    <p className="line-clamp-1"><li>Learn from the best teachers chosen around the world.</li></p>
                    <p className="line-clamp-1"><li>Easy to understand lectures for everyone.</li></p>
                    <p className="line-clamp-1"><li>Elevate your skill and knowledge from Beginner level to Professional.</li></p>
                    <p className="line-clamp-1"><li>Wide variety of lectures to choose from.</li></p>
                </div>
            </div>
        </section>
    </main>
}