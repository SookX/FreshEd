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

    // ALERTS

    const [alerts, setAlerts] = useState([])

    const handleAlert = (type, message, autoClose, closeTime) => {
        const id = alerts.length ? alerts[alerts.length - 1].id + 1 : 1

        const newAlert = {
            id,
            type,
            message,
            autoClose,
            closeTime
        }

        setAlerts([...alerts, newAlert])
    }




    // TESTS
    const [tests, setTests] = useState([])

    useEffect(() => {
        const fetching = async () => {
            const response = await axios.get('http://127.0.0.1:8000/school/api/testView/')

            console.log('TESTS')
            console.log(response)

            setTests(response.data.tests)
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
        if (loggedIn) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/authenticate/isUser/', { id: JSON.parse(localStorage.getItem('accData')).id })

                console.log('ACCDATRA')
                console.log(response)
                setAccountData(response.data)
            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {
        if (loggedIn) {
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

    const corections = [
        {
            "title": "Bulgarian",
            "id": 1,
            "mistakes": [
                {
                    "question": "What is the capital of France?",
                    "chosen": "Paris",
                    "correct": "London",
                    "description": "The capital of France is Paris, not London.",
                    "id": "1"
                },
                {
                    "question": "What is the largest planet in our solar system?",
                    "chosen": "Jupiter",
                    "correct": "Saturn",
                    "description": "The largest planet in our solar system is Jupiter, not Saturn.",
                    "id": "2"
                },
                {
                    "question": "What is the chemical symbol for gold?",
                    "chosen": "Au",
                    "correct": "Ag",
                    "description": "The chemical symbol for gold is Au, not Ag.",
                    "id": "3"
                },
                {
                    "question": "What is the tallest mountain in the world?",
                    "chosen": "Mount Everest",
                    "correct ": "Mount Kilimanjaro",
                    "description ": "The tallest mountain in the world is Mount Everest, not Mount Kilimanjaro.",
                    "id": "4"
                },
                {
                    "question": "What is the capital of Australia?",
                    "chosen": "Sydney",
                    "correct": "Canberra",
                    "description": "The capital of Australia is Canberra, not Sydney.",
                    "id": "5"
                },
                {
                    "question": "What is the symbol for the element hydrogen?",
                    "chosen": "Hg",
                    "correct": "H",
                    "description": "The symbol for the element hydrogen is H, not Hg.",
                    "id": "6"
                },
                {
                    "question": "What is the largest ocean in the world?",
                    "chosen": "Pacific Ocean",
                    "correct": "Indian Ocean",
                    "description": "The largest ocean in the world is the Pacific Ocean, not the Indian Ocean.",
                    "id": "7"
                },
                {
                    "question": "What is the capital of Canada?",
                    "chosen": "Toronto",
                    "correct": "Ottawa",
                    "description": "The capital of Canada is Ottawa, not Toronto.",
                    "id": "8"
                },
                {
                    "question": "What is the symbol for the element carbon?",
                    "chosen": "Ca",
                    "correct": "C",
                    "description": "The symbol for the element carbon is C, not Ca.",
                    "id": "9"
                },
                {
                    "question": "What is the longest river in the world?",
                    "chosen": "Nile River",
                    "correct": "Amazon River",
                    "description": "The longest river in the world is the Amazon River, not the Nile River.",
                    "id": "10"
                }]
        }
    ];

    return (
        <DataContext.Provider value={{
            loggedIn, setLoggedIn, navigate, sticky, setSticky, assignments,
            tests, setTests, accountData, corections, handleAlert, alerts, setAlerts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider