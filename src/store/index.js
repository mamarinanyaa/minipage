import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { initListReducer } from "./initList/initListReducer";

const reducer = combineReducers({
    initListReducer
});

export const store = createStore(reducer, composeWithDevTools())