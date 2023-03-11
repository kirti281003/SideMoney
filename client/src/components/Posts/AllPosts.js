import { allPosts } from "../../actions/postActions";
import PostCard from "./PostCard";
import "./AllPosts.css";
import { getUser } from "../../actions/userActions";
import search from "../../images/Search.png";
const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");


function AllPosts()
{
  const [visible, setVisible] = useState(3);


  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
    
  };

  
  
  const[keyword,setQuery]=useState("");
    const dispatch=useDispatch();
    const{error,posts}=useSelector(state=>state.posts)
    const {isAuthenticated,user,loading}=useSelector(state=>state.user);
    if(visible>posts.length){
    var  style={
        backgroundColor:"#282828",
        
      }
      var btnstyle={
        color:"#282828"
      }
    }
    const filter=()=>
    {dispatch(allPosts(keyword))

    }

    useEffect(()=>
    {
  
        dispatch(getUser())
        dispatch(allPosts())
  
       
    },[dispatch])

if(isAuthenticated){
    return(
        <>
          {/* <div className="searchbox">
            <input type="text" placeholder="What are you looking for?" onChange={(e)=>setQuery(e.target.value)}/>
            <img src={search} onClick={filter}></img>
          </div> */}
         
          <div className="gradient">
          <h1>FIND OPPORTUNITIES</h1>
          <form className="searchbox" onSubmit={filter}>
          
          <img src={search} onClick={filter} id="myInput"></img>
            <input type="text" placeholder="Search By Category" onChange={(e)=>setQuery(e.target.value)}/>
         
          </form>
          </div>

        <div className="Post">
   
      
        {
        posts.slice(0,visible).map(post=>(
        
       <PostCard key={post._id} post={post} url={`/post/${post._id}`} name="View" name2="Apply" url2={`/createSubmission/${post._id}`} />  
       
     

        ))}
        
        </div>
        <div className="showmore" style={style}>
        <button  onClick={showMoreItems} style={btnstyle}>Show More</button>
        </div>
          
        </>
    )
}
else
{
  return(
    <>
      Please Login
    </>
  )
}
        


}
export default AllPosts;