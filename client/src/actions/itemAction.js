import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from './types'; 
import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemLoading())
    axios.get('/api/items')
        .then( res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        )
}

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
    .then (res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
}

export const addItem = (newItem) => dispatch => {
    axios.post('/api/items', newItem)
    .then( res =>
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    )
}

export const setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}