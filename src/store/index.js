import { createStore, combineReducers, applyMiddleware  } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { initListReducer } from "./initList/initListReducer";
import { selectorReducer } from "./selector/selectorReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    initListReducer,
    selectorReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))