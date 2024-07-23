import React, { createContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/authActions';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    useEffect(() => {
        // Load user data when component mounts
        dispatch(loadUser());
    }, [dispatch]);

    useEffect(() => {
        if (authState.user) {
            setUser(authState.user);
        }
    }, [authState.user]);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        console.log('Logging out...');
        localStorage.removeItem('user');
        setUser(null);
        console.log('User state after logout:', user); // Check state update
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
