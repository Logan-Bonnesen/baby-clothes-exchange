import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/authActions'

const Logout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <div>
            <h2>Logged out successfully</h2>
        </div>
    )
}

export default Logout