import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../actions/authActions'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        location: ''
    });

    const { name, email, password, password2, location } = formData;
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            dispatch(register({ name, email, password, location }))
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register