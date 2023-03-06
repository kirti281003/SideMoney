import "./Home.css";
import Vectorleftlight from "../../images/Vectorleftlight.png";
import Vectorleftdark from "../../images/Vectorleftdark.png";
import homeright from "../../images/homeright.png";
import homeleft from "../../images/homeleft.png";
import down from "../../images/down.png";
import Explore from "./ExplorePage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";
import { useEffect } from "react";
function Home()
{const{isAuthenticated}=useSelector(state=>state.user);
console.log(isAuthenticated);
    // const dispatch=useDispatch();
    // useEffect(()=>
    // {
    //     dispatch(getUser());

    // },[dispatch])
 

    return(
        <>
            {/* <div className="HomeContainer">
          
            <img src={homeright} className="homeright"></img>
                <div className="homehead">
                <h1>Earn</h1>
                    <h2>Side Money</h2>
                    <span>"Boost Your Income with flexible side hustles"</span>
                    <button>Join Today</button>
                </div>
                
               
            </div>
             */}
           <div className="HomeContainer">
           <div className="homehead">
            <h1>Earn</h1>
            <h2>Side Money</h2>
            <div>"Boost Your Income with flexible side hustles"</div>
            <button className="join">Join Today</button>
            </div>
            <img src={homeright} className="homeright"></img>
            <div className="explorepage">
                
            </div>
           </div>
        </>
    )
    
        
    

}
export default Home;