import { allPosts } from "../../actions/postActions";
import PostCard from "./PostCard";
import "./AllPosts.css";
import { getUser } from "../../actions/userActions";
import search from "../../images/Search.png";
const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");


function AllPosts()
{const[keyword,setQuery]=useState("");
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    const {isAuthenticated,user}=useSelector(state=>state.user);
    console.log(isAuthenticated);
    const filter=()=>
    {dispatch(allPosts(keyword))

    }

    useEffect(()=>
    {
        // dispatch(getUser())
        dispatch(allPosts())
        dispatch(getUser())
  
        
    },[dispatch])


    return(
        <>
          {/* <div className="searchbox">
            <input type="text" placeholder="What are you looking for?" onChange={(e)=>setQuery(e.target.value)}/>
            <img src={search} onClick={filter}></img>
          </div> */}
         
          <div className="gradient">
          <h1>FIND OPPORTUNITIES</h1>
          <div className="searchbox">
            <input type="text" placeholder="What are you looking for?" onChange={(e)=>setQuery(e.target.value)}/>
            <img src={search} onClick={filter}></img>
          </div>
          </div>

        <div className="Post">
   
      
        {posts &&
        posts.map(post=>(
        
       <PostCard key={post._id} post={post} url={`/post/${post._id}`} name="View" name2="Apply" url2={`/createSubmission/${post._id}/${post.heading}`} />  
       
     

        ))}
        
        </div>
          
        </>
    )
       
        
}
export default AllPosts;