import { SELECTOROPTION_CHANGE, SELECTORTAGS_CHANGE, SELECTOR_RESET } from "./action"

const initialState = {
    selectorTags: [],
    selectorOption: {}
}

export const selectorReducer = (state=initialState, action) => {
    switch (action.type) {
        case SELECTORTAGS_CHANGE:
            return {
                ...state,
                selectorTags: action.data
            }
        case SELECTOROPTION_CHANGE:
            return {
                ...state,
                selectorOption: action.data
            }
        case SELECTOR_RESET:
            return {
                ...state,
                selectorTags: [],
                selectorOption: {}
            }
        default:
            return state;
    }
}