import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../actions/userActions";
import UserPage from "./UserPage";
import rocket from "../../images/rocket.png";
import "./User.css";
import { acceptedsubmissions, submissions } from "../../actions/subAction";
import { userPosts } from "../../actions/postActions";
import PostSection from "./PostSection";
import PostCard from "../Posts/PostCard";

function User()
{const dispatch=useDispatch();

    const {loading,isAuthenticated,user}=useSelector(state=>state.user)
    const{posts}=useSelector(state=>state.posts)
    const{subs}=useSelector(state=>state.subs)
    const{username}=useParams();
    useEffect(()=>{
        dispatch(getUser())
        dispatch(submissions())
        dispatch(userPosts())
    },[dispatch])

    return(
        <>
        <UserPage {...user}/>
    {/* <div className="rocket"><img src={rocket}></img></div> */}

    {/* <div className="subsection">
        <SubSection subs={subs}/>
    </div> */}
<div className="userlinksection">
<div className="userlinkdiv">
<Link className="userlink" to={`/posts/user`}>Posts Made By You</Link>
</div>
    <div className="userlinkdiv">
    <Link className="userlink" to={`/user/submissions`}>Submissions By You</Link>
    </div>
    <div className="userlinkdiv">
    <Link className="userlink" to={`/createPost`}>Create A New Post</Link>
    </div>
</div>

        </>
    )
}
export default User;