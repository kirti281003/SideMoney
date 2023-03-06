import { ALL_POST_REQUEST, ALL_POST_SUCCESS } from "../constants/postConstants";
import {GET_SUB_FAIL, GET_SUB_REQUEST, GET_SUB_SUCCESS, POST_SUB_FAIL,POST_SUB_REQUEST,POST_SUB_SUCCESS,USER_SUB_FAIL,USER_SUB_SUCCESS,USER_SUB_REQUEST, ALL_SUB_REQUEST, ALL_SUB_SUCCESS, ALL_SUB_FAIL, ACCEPTED_SUB_REQUEST, ACCEPTED_SUB_SUCCESS, ACCEPTED_SUB_FAIL, ACCEPT_SUB_REQUEST} from "../constants/subConstants";

export const subReducer=(state={sub:{}},action)=>{
    console.log(action.payload);
    switch(action.type)
    {
        case POST_SUB_REQUEST:
            case GET_SUB_REQUEST:
            return{
                loading:true,
                sub:{}
            }
        case POST_SUB_SUCCESS:
            case GET_SUB_SUCCESS:
            return{
                ...state,
                loading:false,
                sub:action.payload
            }
        case POST_SUB_FAIL:
            case GET_SUB_FAIL:
            return{
                loading:false,
                sub:{}
            }
        default:
            return state
    }

}

export const subsReducer=(state={sub:[]},action)=>{
    console.log(action.payload);
    switch(action.type)
    {
        case USER_SUB_REQUEST:
            case ALL_SUB_REQUEST:
            case ACCEPTED_SUB_REQUEST:
       
            return{
                loading:true,
                subs:[]
            }
        case USER_SUB_SUCCESS:
            case ALL_SUB_SUCCESS:
            case ACCEPTED_SUB_SUCCESS:
  
            return{
                ...state,
                loading:false,
                subs:action.payload
            }
        case USER_SUB_FAIL:
            case ALL_SUB_FAIL:
            case ACCEPTED_SUB_FAIL:
         
            return{
                loading:false,
                subs:[]
            }
        default:
            return state
    }

}

export const acceptReducer=(state={message:""},action)=>{
    switch(action.type)
    {
        case ACCEPT_SUB_REQUEST:
            return{
                ...state,
                loading:true,
                message:false
            }
        case ACCEPTED_SUB_SUCCESS:
            return{
                ...state,
                loading:true,
                message:true
            }
        case ACCEPTED_SUB_FAIL:
            return{
                ...state,
                loading:true,
                message:false
            }
        default:
            return state
    }

}