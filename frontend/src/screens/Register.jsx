import axios from "axios"
import { useState } from "react"

const Register = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState(2)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const obj = {
            email,
            first_name: firstName,
            last_name: lastName,
            role,
            password,
            re_password: confirmPassword
        }

        console.log(obj)

        try {
            const response = await axios.post('http://127.0.0.1:8000/authenticate/auth/users/', obj)

            console.log(response)
        } catch(err) {
            console.log(err)
        } finally {
            setEmail('')
            setFirstName('')
            setLastName('')
            setRole(2)
            setPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="role">I am a:</label>

            <select value={role} onChange={(e) => setRole(e.target.value)} id="role">
                <option value={2}>Student</option>
                <option value={1}>Teacher</option>
            </select>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Register</button>
        </form>
    )
}

export default Register