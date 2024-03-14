import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { DataContext } from "../context/DataContext";

import '../css/account.css'

const Login = () => {
    const { loggedIn, setLoggedIn, navigate } = useContext(DataContext)

    useEffect(() => {
        if(loggedIn) navigate('/')
    }, [loggedIn])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const obj = {
            email,
            password
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/authenticate/isUser/', obj)

            console.log(response)

            if(response.status === 200) {
                localStorage.setItem('accData', JSON.stringify({id: response.data.id}))

                setLoggedIn(true)

                localStorage.setItem('loggedIn', true)

                navigate('/')
            }
        } catch(err) {
            console.log(err)
        } finally {
            setEmail('')
            setPassword('')
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="section-account">
            <input
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Log In</button>
        </form>
    )
}

export default Login