import { INITLIST_REQUEST, INITLIST_REQUEST_ERROR, INITLIST_REQUEST_SUCCESS } from "./action"

const initialState = {
    data: [],
    error: ''
}

export const initListReducer = (state=initialState, action) => {
    switch (action.type){
        
        case INITLIST_REQUEST:
            return {
                ...state,
            }
        case INITLIST_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case INITLIST_REQUEST_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}