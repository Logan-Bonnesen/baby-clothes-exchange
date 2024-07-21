import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEM_LOADING } from './actionTypes';
import axios from 'axios';

// fetch items
export const fetchItems = () => async dispatch => {
    dispatch({ type: ITEM_LOADING })
    try {
        const res = await axios.get('/api/items')
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
    try {
        const res = await axios.post('/api/items', itemData)
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
    try {
        await axios.delete(`/api/items/${id}`)
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
    try {
        const res = await axios.put(`/api/items/${id}`, itemData)
        dispatch({
            type: UPDATE_ITEM,
            payload: res.data
        })
    } catch (err) {
        console.error(err.message)
    }
}