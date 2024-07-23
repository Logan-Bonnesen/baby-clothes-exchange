import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEM_LOADING, GET_USER_ITEMS } from '../actions/actionTypes';

const initialState = {
  items: [], // Array of items fetched from the server
  item: null, // Single item for details or update
  loading: true, // Indicates if data is being fetched
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_LOADING:
            return {
                ...state,
                loading: true,
            }

        case FETCH_ITEMS:
            return {
                ...state,
                items: action.payload, // update items with the payload of the action
                loading: false,
            }
        case GET_USER_ITEMS: 
            return {
                ...state,
                items: action.payload,
                loading: false
            };

        case ADD_ITEM:
            return {
                ...state, 
                items: [action.payload, ...state.items],  
                loading: false,
            }
        
        case DELETE_ITEM:
            return {
                ...state, 
                items: state.items.filter(item => item._id !== action.payload),
                loading: false,
            }

        case UPDATE_ITEM: 
            return {
                ...state, 
                items: state.items.map(item => 
                    item._id === action.payload._id ? action.payload : item
                ),
                loading: false,
            }
        default: 
            return state;
    }
}

export default itemReducer;