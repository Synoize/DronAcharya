import { Search } from "../components/Search";
import { useData } from "../context/data";

export const Home = () => {
    const { appData } = useData();

    return <main>
        <section>
            <div >
                <Search />
                <img src="cover.svg" alt="" className="w-full opacity-100" />
            </div>
        </section>

        <section className="flex flex-col ~gap-8/12 ~p-8/20 bg-black">
            <h2 className="~text-lg/4xl text-nowrap text-primary font-bold">ANYONE CAN BE ANYTHING !!!</h2>
            <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center sm:items-start ~gap-8/12 ">
                <span>
                    <iframe src="https://lottie.host/embed/76b83385-f50c-4f9c-a51c-7793fd3ec66b/e7ejUEIo1W.lottie" className="~w-56/96 ~h-40/56"></iframe>
                </span>
                <p className="~text-lg/2xl text-center sm:text-start text-primary sm:w-3/5">In DronAcharya anyone can be anything, a teacher can be a student a student can be a teacher or vice versa. Learn from teachers are who are passionate in their field to grow and level up yourselves.</p>
            </div>
        </section>

        <section className="flex flex-col ~gap-8/20 ~p-8/20 bg-gradient-to-b from-black to-blue-800 ">
            <h1 className="~text-lg/4xl text-primary font-semibold">TRENDING COURSES.</h1>
            <div className="flex flex-col justify-center items-center sm:flex-row ~gap-8/20">
                <span className="flex flex-col gap-4">
                    <div className="~w-48/64 ~h-36/48 border rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                        <div className="~w-32/40 h-4 border rounded-md"></div>
                        <div className="~w-48/64 h-4 border rounded-md"></div>
                    </div>
                </span>

                <span className="flex flex-col gap-4">
                    <div className="~w-48/64 ~h-36/48 border rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                        <div className="~w-32/40 h-4 border rounded-md"></div>
                        <div className="~w-48/64 h-4 border rounded-md"></div>
                    </div>
                </span>

                <span className="flex flex-col gap-4">
                    <div className="~w-48/64 ~h-36/48 border rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                        <div className="~w-32/40 h-4 border rounded-md"></div>
                        <div className="~w-48/64 h-4 border rounded-md"></div>
                    </div>
                </span>
            </div>
        </section>
    </main>
}