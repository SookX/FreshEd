import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext({})

const DataProvider = ({ children }) => {
    // AXIOS INTERCEPTORS
    // axios.interceptors.request.use((request) => {
    //     // console.log('REQUEST')
    //     // console.log(request)
    //     return request
    // })

    // axios.interceptors.response.use((response) => {
    //     // console.log('RESPONSE')
    //     // console.log(response)
    //     return response
    // })


    // TESTS
    const [tests, setTests] = useState([])

    useEffect(() => {
        const fetching = async () => {
            const response = await axios.get('http://127.0.0.1:8000/school/api/testView/')

            setTests(response.data[0].tests)
        }

        fetching()
    }, [])

    useEffect(() => {
        // console.log(tests)
    }, [tests])


    // NAVIGATION
    const navigate = useNavigate()

    // NAVBAR
    const [sticky, setSticky] = useState(false)


    // LOGIN SYSTEM
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem('loggedIn')) || false)
    const [accountData, setAccountData] = useState({})

    const fetchAccount = async () => {
        if(loggedIn){
            try {
                const response = await axios.post('http://127.0.0.1:8000/authenticate/isUser/', {id: JSON.parse(localStorage.getItem('accData')).id})

                setAccountData(response.data)
            } catch(err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        if(loggedIn) {
            localStorage.setItem('loggedIn', JSON.stringify(loggedIn))

            fetchAccount()
        }
    }, [loggedIn])


    
    

    const assignments = [
        {
            "title": "Mathematics",
            "id": 1,
            "description": "A comprehensive exam covering various topics in mathematics"
        },
        {
            "title": "English Literature",
            "id": 2,
            "description": "An exam that tests knowledge of English literature and literary analysis"
        },
        {
            "title": "Physics",
            "id": 3,
            "description": "A test of understanding and application of fundamental principles in physics"
        },
        {
            "title": "History",
            "id": 4,
            "description": "An exam on major historical events and their significance"
        },
        {
            "title": "Chemistry",
            "id": 5,
            "description": "A comprehensive exam covering various topics in chemistry"
        },
        {
            "title": "Biology",
            "id": 6,
            "description": "A test of knowledge on living organisms and their processes"
        },
        {
            "title": "Computer Science",
            "id": 7,
            "description": "An exam on programming, algorithms, and computer systems"
        },
        {
            "title": "Geography",
            "id": 8,
            "description": "A test of knowledge on the Earth's physical features and human populations"
        },
        {
            "title": "Economics",
            "id": 9,
            "description": "An exam on principles and theories of economics"
        },
        {
            "title": "Psychology",
            "id": 10,
            "description": "A comprehensive exam on the study of human behavior and mental processes"
        }
    ];

    return (
        <DataContext.Provider value={{
            loggedIn, setLoggedIn, navigate, sticky, setSticky, assignments,
            tests, setTests, accountData
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider