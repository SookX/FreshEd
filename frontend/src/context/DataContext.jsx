import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    // NAVIGATION
    const navigate = useNavigate()

    // LOGIN SYSTEM
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')) || false)

    useEffect(() => {
        // return () => localStorage.removeItem('accData')
    }, [])

    return (
        <DataContext.Provider value={{
            loggedIn, setLoggedIn, navigate
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider