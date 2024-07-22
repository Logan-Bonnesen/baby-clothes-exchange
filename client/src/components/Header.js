import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/items">Items</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}

export default Header;