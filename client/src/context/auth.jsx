import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
import axios from "axios";
import { Loader } from "../UI/Loader";

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem('token'));
    const authorizationToken = `Bearer ${token}`;
    const BASE_URL = "http://localhost:5000";
    
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;
    console.log('isLoggedIn : ', isLoggedIn);

    // taking the Logout functionality
    const LogoutUser = () => {
        setToken("");
        setUser("");
        return localStorage.removeItem('token');
    }

    // JWT Authentication - to get the currently loggedIn user data
    const userAuthentication = async () => {
        try {
            const URL = `${BASE_URL}/api/auth/user`;
            const response = await axios.get(URL, {
                method: "POST",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            setLoading(false);
            if (response.statusText) {
                setUser(response.data.userData);
            }
        } catch (error) {
            setLoading(false);
            console.log("Error fetching user data", error);
        }
    }

    useEffect(() => {
        userAuthentication();
    }, [isLoggedIn]);


    // loading after fetching data
    if (loading) {
        return <Loader/>
    }

    const ProvideValue = {
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        authorizationToken,
    }
    return <AuthContext.Provider value={ProvideValue}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};