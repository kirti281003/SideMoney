import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, 
  REGISTER_FAIL,REGISTER_REQUEST,REGISTER_SUCCESS,
USER_FAIL,USER_REQUEST,USER_SUCCESS } from "../constants/userConstants";
import axios from "axios";
const baseURL = process.env.NODE_ENV === "development" ? "localhost:4000" : "https://earnsidemoneybackend.onrender.com"


export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
     
      const { data } = await axios.post(`/api/v1/login`,
        { email, password },
        config
      );
      console.log(data);
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: LOGIN_FAIL, payload:error.response.data.error});
    }
  };


  export const register=(email,password,name,username)=>async(dispatch)=>{
    try {
      dispatch({ type: REGISTER_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v1/register`,
        { email, password,name,username },
        config
      );
      console.log(data);
  
      dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: REGISTER_FAIL, payload:error.response.data.error});
    }

  }
  export const logout=()=>async(dispatch)=>{
    try{
      dispatch({
        type:LOGOUT_REQUEST
      })
      const {data}=await axios.get("/api/v1/logout");
      console.log(data);
      dispatch({
        type:LOGOUT_SUCCESS,
        payload:data.message
      })

    }
    catch(error)
    {
      dispatch({
        type:LOGOUT_FAIL,
        payload:error.response.data.error
      })

    }
  }

  export const getUser=()=>async(dispatch)=>{
    try{
      dispatch({
        type:USER_REQUEST
      })
      const {data}=await axios.get(`/api/v1/user`);
      console.log(data);
      dispatch({
        type:USER_SUCCESS,
        payload:data.user
      })

    }
    catch(error)
    {
      dispatch({
        type:USER_FAIL,
        payload:error.response.data.error
      })

    }
  }