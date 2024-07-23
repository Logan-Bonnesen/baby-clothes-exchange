import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/authActions'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(logout())
        navigate('/')
    }, [dispatch, navigate])

    return (
        <div>
            <h2>Logged out successfully</h2>
        </div>
    )
}

export default Logout