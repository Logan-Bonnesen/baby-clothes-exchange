import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT, 
    USER_LOADED, 
    AUTH_ERROR 
} from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, 
    loading: true,
    user: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true, 
                loading: false, 
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state, 
                token: null, 
                isAuthenticated: false,
                loading: false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state, 
                token: null, 
                isAuthenticated: false,
                loading: false
            }
        default: 
            return state;
    }
}

export default authReducer
