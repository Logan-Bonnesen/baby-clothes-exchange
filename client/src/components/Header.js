import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AuthContext } from '../AuthContext'

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <header className="header">
             <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/profile">Profile</Link>
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
        </header>
    )
}

export default Header;