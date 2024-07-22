import axios from 'axios'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    USER_LOADED,
    AUTH_ERROR
} from './actionTypes'

const API_URL = process.env.REACT_APP_API_URL

console.log("API_URL:", API_URL);



// load user
export const loadUser = () => async dispatch => {
    const token = localStorage.getItem('token')
    if (!token) {
        dispatch({
            type: AUTH_ERROR
        })
        return;
    }
    try {
        const res = await axios.get(`${API_URL}/users`, {
            headers: {
                'x-auth-token': token
            }
        })
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// register user
export const register = (formData) => async dispatch => {
    try {
        const res = await axios.post(`${API_URL}/users/register`, formData)
        localStorage.setItem('token', res.data.token)
        
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        // load user after registration
        dispatch(loadUser())
    } catch (err) {
        console.error("registration error:", err.response.data)
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// login user
export const login = (formData) => async dispatch => {
    try {
        const res = await axios.post(`${API_URL}/users/login`, formData)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        // load user after login
        dispatch(loadUser())
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// logout user
export const logout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch({ type: LOGOUT })
}