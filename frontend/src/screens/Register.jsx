import axios from "axios"
import { useContext, useState } from "react"
import Glass from "../components/Glass"
import { DataContext } from "../context/DataContext"

const Register = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [role, setRole] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { navigate } = useContext(DataContext)

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
            
            if(response.status == 201) navigate('/login')
        } catch(err) {
            console.log(err)
        } finally {
            setEmail('')
            setFirstName('')
            setLastName('')
            setRole(0)
            setPassword('')
            setConfirmPassword('')
        }
    }

    return (
        <section className="section-account">
            <Glass classes="account-container green">
                <div className="account-text-box">
                    <h2 className="account-heading">Register An Account</h2>
                </div>
                
                <form onSubmit={(e) => handleSubmit(e)} className="form-account">
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

                    <div className="account-select">
                        <label htmlFor="role">I am a:</label>

                        <select value={role} onChange={(e) => setRole(e.target.value)} id="role">
                            <option value={0}>Student</option>
                            <option value={1}>Teacher</option>
                        </select>
                    </div>

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

                    <button type="submit" className="btn">Register</button>
                </form>
            </Glass>
        </section>
    )
}

export default Register