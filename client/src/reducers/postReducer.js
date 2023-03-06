import { ALL_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, POST_FAIL, POST_REQUEST, POST_SUCCESS, REGISTER_POST_FAIL, REGISTER_POST_REQUEST, REGISTER_POST_SUCCESS, USER_POST_FAIL, USER_POST_REQUEST, USER_POST_SUCCESS } from "../constants/postConstants";

export const postReducer = (state = { post:{}}, action) => {

    switch (action.type) {
      case REGISTER_POST_REQUEST:
        case POST_REQUEST:
        return {
          loading: true,
          post:{}
        };
      case REGISTER_POST_SUCCESS:
        case POST_SUCCESS:
        return {
          ...state,
          loading: false,
          post: action.payload,
        };
        case REGISTER_POST_FAIL:
          case POST_FAIL:
   
              return {
                ...state,
                loading: false,
                error: action.payload,
              };
        default:
                return state;
    }
}

export const allPostReducer = (state = { posts:[]}, action) => {
    
    switch (action.type) {
      case ALL_POST_REQUEST:
    case USER_POST_REQUEST:
        return {
          loading: true,
          posts:[]
        };
      case ALL_POST_SUCCESS:
        case USER_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,

        };
        case ALL_POST_FAIL:
            case USER_POST_FAIL:
   
              return {
                ...state,
                loading: false,
                error: action.payload,
              
              };
        default:
                return state;
    }
}