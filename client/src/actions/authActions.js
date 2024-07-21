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

// load user
export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth')
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
        const res = await axios.post('/api/users/register', formData)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        // load user after registration
        dispatch(loadUser())
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// login user
export const login = (formData) => async dispatch => {
    try {
        const res = await axios.get('/api/users/login', formData)
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
    dispatch({ type: LOGOUT })
}