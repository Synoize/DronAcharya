import { createContext, useContext, useEffect, useState } from "react";
export const DataContext = createContext();
import axios from "axios";
import { Loader } from "../UI/Loader";


export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [appData, setAppData] = useState();
    const [courseData, setCourseData] = useState([]);
    const BASE_URL = "http://localhost:5000";
    
    const getAppData = async () => {
        try {
            const URL = `${BASE_URL}/api/data/app`;
            const response = await axios.get(URL);

            setLoading(false);

            if (response.statusText) {
                console.log("App Data : ", response.data.msg[0]);
                setAppData(response.data.msg[0]);
            }
        } catch (error) {
            setLoading(false);
            console.log(`app frontend error ${error}`);
        }
    }

    const getCourseData = async () => {
        try {
            const URL = `${BASE_URL}/api/data/courses`;
            const response = await axios.get(URL);

            setLoading(false);

            if (response.statusText) {
                console.log("courses Data : ", response.data.msg);
                setCourseData(response.data.msg);
            }
        } catch (error) {
            setLoading(false);
            console.log(`app frontend error ${error}`);
        }
    }

    // set loading functionality
    useEffect(() => {
        setLoading(true);
        getAppData();
        getCourseData();
    }, []);

    // search product functionality
    const searchData = courseData.filter((course) => course.title.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase()) || course.name.toLowerCase().includes(search.toLowerCase()));

    // loading after fetching data
    if (loading) {
        return <Loader/>
    }

    const ProvideValue = {
        loading,
        appData,
        courseData,
        search,
        setSearch,
        searchData,
    }

    return <DataContext.Provider value={ProvideValue}>
        {children}
    </DataContext.Provider>
};

export const useData = () => {
    const dataContextValue = useContext(DataContext);
    if (!dataContextValue) {
        throw new Error("useData used outside of the Provider");
    }
    return dataContextValue;
};