import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS,LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, USER_REQUEST, USER_SUCCESS, USER_FAIL } from "../constants/userConstants";
const initialState={
  user:{},
  isAuthenticated:false,

}
export const userReducer = (state = initialState, action) => {

    switch (action.type) {
      case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      case USER_REQUEST:
        return {
          loading: true,
          isAuthenticated:false
        };
      case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
          case USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated:true,
          user: action.payload,
        };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
          case USER_FAIL:
   
              return {
                ...state,
                loading: false,
                isAuthenticated:false,
                error: action.payload,
              };
        case LOGOUT_REQUEST:
          return{
          loading:true,
          isAuthenticated:true,

        }
        case LOGOUT_SUCCESS:
          return{
            ...state,
            loading:false,
            isAuthenticated:false,
            user:{}
          }
        case LOGOUT_FAIL:
          return{
            loading:false,
            isAuthenticated:true

        }
        default:
                return state;
    }
}

// export const logoutReducer=(state={},action)=>
// {
//     switch(action.type)
//     {
//         case LOGOUT_REQUEST:
//         return{
//             loading:true,
//             isAuthenticated:true
//         }
//         case LOGOUT_SUCCESS:
//             return{
//               ...state,
//                 loading:false,
//                 isAuthenticated:false,
//             }
//             case LOGOUT_FAIL:
//                 return{
//                 loading:false,
//                 isAuthenticated:true,
//             }
//         default:
//             return state;

//     }
// }