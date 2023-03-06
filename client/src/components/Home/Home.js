import "./Home.css";
import Vectorleftlight from "../../images/Vectorleftlight.png";
import Vectorleftdark from "../../images/Vectorleftdark.png";
import homeright from "../../images/homeright.png";
import homegradient from "../../images/homegradient.png";
import homeleft from "../../images/homeleft.png";
import down from "../../images/down.png";
import Explore from "./ExplorePage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";
import { useEffect } from "react";
import HomeCard from "./HomeCard";
function Home()
{const{isAuthenticated}=useSelector(state=>state.user);
console.log(isAuthenticated);
    // const dispatch=useDispatch();
    // useEffect(()=>
    // {
    //     dispatch(getUser());

    // },[dispatch])
 
function toSignUp()
{
    window.location.href="/signup"
}
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
            <button className="join" onClick={toSignUp}>Join Today</button>
            </div>
            <img src={homeright} className="homeright"></img>
          
            
           </div>

<hr></hr>
           <div className="explorepage">
          
            <HomeCard text="Hire People For Work"></HomeCard>
            <HomeCard text= "Find Opportunities To Work"></HomeCard>
<HomeCard text="Get A Chance To Earn"></HomeCard>

            </div>
        </>
    )
    
        
    

}
export default Home;