import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUser } from '../actions/authActions'

const Profile = () => {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(loadUser())
        }
    }, [dispatch, isAuthenticated])

    return (
       <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    {/* Add more user details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Profile
