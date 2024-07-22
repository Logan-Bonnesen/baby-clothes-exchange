import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEM_LOADING } from './actionTypes';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

console.log("API_URL:", API_URL);

// fetch items
export const fetchItems = () => async dispatch => {
    dispatch({ type: ITEM_LOADING })
    try {
        const res = await axios.get(`${API_URL}/items`)
        dispatch({
            type: FETCH_ITEMS,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
    }
}

// add item
export const addItem = (itemData) => async dispatch => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.post(`${API_URL}/items`, itemData, {
            headers: {
                'x-auth-token': token
            }
        })
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
    }
}

// delete item
export const deleteItem = (id) => async dispatch => {
    const token = localStorage.getItem('token')
    try {
        await axios.delete(`${API_URL}/items/${id}`, {
            headers: {
                'x-auth-token': token
            }
        })
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    } catch (err) {
        console.error(err.message)
    }
}

// update item
export const updateItem = (id, itemData) => async dispatch => {
    const token = localStorage.getItem('token')
    try {
        const res = await axios.put(`${API_URL}/items/${id}`, itemData, {
            headers: {
                'x-auth-token': token
            }
        })
        dispatch({
            type: UPDATE_ITEM,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
    }
}