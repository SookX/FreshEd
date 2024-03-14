import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    // TESTS
    const [tests, setTests] = useState([])

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/school/api/test/')

                console.log(response)
            } catch(err) {
                console.log(err)
            }
        }

        fetching()
    }, [])

    // EXERCISE
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/school/api/exercise/')

                console.log(response)
            } catch(err) {
                console.log(err)
            }
        }

        fetching()
    }, [])

    // EXERCISE
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/school/api/answer/')

                console.log(response)
            } catch(err) {
                console.log(err)
            }
        }

        fetching()
    }, [])


    // NAVIGATION
    const navigate = useNavigate()

    // NAVBAR
    const [sticky, setSticky] = useState(false)


    // LOGIN SYSTEM
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')) || false)

    useEffect(() => {
        localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
    }, [loggedIn])

    return (
        <DataContext.Provider value={{
            loggedIn, setLoggedIn, navigate, sticky, setSticky
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider