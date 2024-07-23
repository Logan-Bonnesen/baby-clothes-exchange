import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../actions/authActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await dispatch(login({ email, password }))
            navigate('/')
        } catch (err) {
            console.error('Login failed:', err)
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required    
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;