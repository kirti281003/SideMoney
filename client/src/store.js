import {combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import { userReducer } from "./reducers/loginReducer";
import { allPostReducer, postReducer } from "./reducers/postReducer";
import { acceptReducer, subReducer, subsReducer } from "./reducers/subReducer";


const reducer=combineReducers({
    user:userReducer,
    post:postReducer,
    posts:allPostReducer,
    sub:subReducer,
    subs:subsReducer,
    accept:acceptReducer
  
});
let initialState={};
const middleware=[thunk];
const store=configureStore(
    {reducer:reducer},
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
) 
export default store;