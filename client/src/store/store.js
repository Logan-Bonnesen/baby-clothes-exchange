import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import itemReducer from './reducers/itemReducer'

// create the redux store
const store = configureStore({
    reducer: {
        auth: authReducer, // reducer for handling authentication state
        items: itemReducer // reducer for handling items state
    }
})

export default store