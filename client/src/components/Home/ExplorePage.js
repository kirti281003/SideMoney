import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../actions/userActions";
import "./ExplorePage.css";
import HomeCard from "./HomeCard";
import down from "../../images/down.png";
import exploreLight from "../../images/explorelight.png";
import exploreDark from "../../images/exploredark.png";
function Explore()
{const dispatch=useDispatch();
    const{isAuthenticated,user}=useSelector(state=>state.user);

    const onAuth=()=>{
        dispatch(getUser());
        if(!isAuthenticated)
        {
            window.alert("Please Login")
        }
        else{
            window.location.href="/posts"
        }
    
}
const checkAuth=()=>{
    dispatch(getUser());
    if(!isAuthenticated)
    {
        window.alert("Please Login")
    }
    else{
        window.location.href=`/user/${user.username}`
    }

}
    return(
        <>
        <div id="explore"> 
        <div className="explorearrow"><a href="#"><img src={down} className="exploreImg"></img></a></div> 
        </div>
        <div className="explorecontainer" >
           <a  onClick={checkAuth} className="checkauth"><HomeCard body="Want To Get Your Work Done?"/></a>
            <a  onClick={onAuth} className="checkauth"><HomeCard body="Freelance Opportunities"/></a>
        
        {/* <div className="exploreVector">
            <img src={exploreLight} className="exploreLight"></img>
            <img src={exploreDark} className="exploreDark"></img>    
            </div> */}
</div>
        </>
    )
}
export default Explore;