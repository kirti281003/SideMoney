
import { userPosts } from "../../actions/postActions";
import { getUser, logout } from "../../actions/userActions";
import "./AllPosts.css";
import PostCard from "./PostCard";
import "./UserPosts.css";

const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function UserPosts()
{  const [visible, setVisible] =useState(3);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    };
    const dispatch=useDispatch();
    const{loading,error,posts}=useSelector(state=>state.posts)
    useEffect(()=>
    {
    // {dispatch(getUser())
        dispatch(userPosts())
        dispatch(getUser())
    },[dispatch])
  function toPost()
  {
    window.location.href="/createPost";
  }
    return(
        <> 
        <div className="gradient">
          <h1>POSTED OPPORTUNITIES</h1>
          <div className="addbox">
          <h4>Add Opportunities <button onClick={toPost}>+</button></h4>

          </div>
          </div>
                  <div class="Post">
                 
        {posts &&
        posts.slice(0,visible).map(post=>(
            <>
            <PostCard post={post} url={`/post/${post._id}`} name="View" url2={`/postSubmission/${post._id}`} name2="Requests" trash={<i class=" fas fa-trash"></i>}/>
            
            </>
        ))}
        
        </div>
        <div className="showmore">
        <button onClick={showMoreItems} >Show More</button>
        </div>
        {/* <input type="submit" name="logout" onClick={logoutSubmit}/> */}
          
        </>
    )
}
export default UserPosts;