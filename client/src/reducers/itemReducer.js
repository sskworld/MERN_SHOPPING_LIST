import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING, EDIT_ITEM } from '../actions/types'; 

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items : state.items.filter(item => item.id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [ action.payload, ...state.items]
            }
        case EDIT_ITEM:
            return {
                ...state,
                items: [ action.payload, ...state.items]
            }
        case ITEM_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}