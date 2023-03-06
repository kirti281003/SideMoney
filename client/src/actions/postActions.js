import { REGISTER_POST_REQUEST,REGISTER_POST_SUCCESS,REGISTER_POST_FAIL, ALL_POST_REQUEST, ALL_POST_SUCCESS, ALL_POST_FAIL,USER_POST_FAIL,USER_POST_REQUEST,USER_POST_SUCCESS,POST_FAIL,POST_SUCCESS,POST_REQUEST, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAIL} from "../constants/postConstants";
import axios from "axios";
// const baseURL = process.env.NODE_ENV === "development" ? "localhost:4000" : "https://earnsidemoneybackend.onrender.com"
export const registerPost=(heading,category,body,skills,deadline,steps,photo)=>async(dispatch)=>{

    try {
      dispatch({ type: REGISTER_POST_REQUEST });
  
      const config = { headers: { "Content-Type": " multipart/form-data " } };
  
      const { data } = await axios.post(
        `/api/v1/createPost`,
        { heading,category,body,deadline,skills,steps,photo },
        config
      );
      console.log(data);
  
      dispatch({ type: REGISTER_POST_SUCCESS, payload: data.post });
    } catch (error) {
        console.log(error);
      dispatch({ type: REGISTER_POST_FAIL, payload:error.response.data.error});
    }

  }

  export const allPosts=(keyword="")=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:ALL_POST_REQUEST
            }
        )
        const {data}=await axios.get(`/api/v1/posts?keyword=${keyword}`);
        console.log(data);
        dispatch(
            {
                type:ALL_POST_SUCCESS,
                payload:data.posts
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:ALL_POST_FAIL,
                payload:error.response.data.error
            }
        )
        
    }
  }
  export const userPosts=()=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:USER_POST_REQUEST
            }
        )
        const {data}=await axios.get("/api/v1/posts/user");
        console.log(data);
        dispatch(
            {
                type:USER_POST_SUCCESS,
                payload:data.posts
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:USER_POST_FAIL,
                payload:error.response.data.error
            }
        )
        
    }
  }
  export const getPost=(id)=>async(dispatch)=>{
    try{
        dispatch(
            {
                type:POST_REQUEST
            }
        )
        const {data}=await axios.get(`/api/v1/post/${id}`);
        console.log(data);
        dispatch(
            {
                type:POST_SUCCESS,
                payload:data.post
            }
        )

    }
    catch(error)
    {
        console.log(error);
        dispatch(
            {
                type:POST_FAIL,
                payload:error.response.data.error
            }
        )
        
    }
  }

  export const deletePost=(id)=>async(dispatch)=>{

    try{
        dispatch({
            type:DELETE_POST_REQUEST
        })
const{data}=await axios.get(`/api/v1/post/delete/${id}`);
         dispatch({
            type:DELETE_POST_SUCCESS,
            payload:data.message
         })

    }
    catch(error){
        dispatch({
            type:DELETE_POST_FAIL,
            payload:error.response.data.error
        })

    }
  }