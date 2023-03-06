import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../actions/postActions";
import bgpost from "../../images/bgpost.png";
import "./PostCard.css";
function PostCard({post,url,name,url2,name2,trash})
{const dispatch=useDispatch();
    var style={
    "backgroundImage":{bgpost}
}
function del()
{
dispatch(deletePost(post._id));
window.location.href="/posts/user";
}

//    return(
//     <>
// <div class="wrapper">
 
//   <div class="cols">
// 			<div class="col" ontouchstart="this.classList.toggle('hover');">
// 				<div class="container">
// 					<div class="front" style={{backgroundImage:`url(${bgpost})`}} >
                   
// 						<div class="inner">
// 							<p>{post.heading}</p>
//               <span>{post.category}</span>
//               <div>Deadline : {post.deadline}</div>
             
// 						</div>
// 					</div>
// 					<div class="back">
//                     <button className="righttrash" onClick={del}>{trash}</button>
// 						<div class="inner">
//                         <div className="backbody">{post.body.substring(0,50)}...</div>
// 						  <p>
//                           <Link to={url} className="linkButton">{name}</Link></p>
//                           <Link to={url2} className="subLink">{name2}</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
//             </div>
//             </div>
//     </>
//    )
return(
    <>
        <div className="postcard">
       
      
            <h1>{post.heading}  <button className="righttrash" onClick={del}>{trash}</button></h1>
         
            <h3>Deadline : {post.deadline}</h3>
            <h6>Description</h6>
            <p>{post.body.substring(0,100)}...</p>
     
            <div className="buttonsection">
            <Link to={url2} className="subLink">{name2}</Link>
            <Link to={url} className="linkButton">{name}</Link>                      
            </div>
        </div>
    </>
)
}
export default PostCard;