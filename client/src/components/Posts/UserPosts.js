
import { userPosts } from "../../actions/postActions";
import { getUser, logout } from "../../actions/userActions";
import "./AllPosts.css";
import PostCard from "./PostCard";
import "./UserPosts.css";

const { useEffect } = require("react");
const { useDispatch, useSelector } = require("react-redux")

function UserPosts()
{
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
        posts.map(post=>(
            <>
            <PostCard post={post} url={`/post/${post._id}`} name="View" url2={`/postSubmission/${post._id}`} name2="Requests" trash={<i class=" fas fa-trash"></i>}/>
            
            </>
        ))}
        </div>
        {/* <input type="submit" name="logout" onClick={logoutSubmit}/> */}
          
        </>
    )
}
export default UserPosts;