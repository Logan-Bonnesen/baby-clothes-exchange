import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/items">Items</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;
