import "./Header.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import { getUser, logout } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Header2()
{  const dispatch=useDispatch();
  const{user}=useSelector(state=>state.user)
    const logoutSubmit=()=>{
    dispatch(logout());
    function noBack()
    {
        window.history.forward()
    }
   noBack();
   window.onload = noBack;
   window.onpageshow = function(evt) { if (evt.persisted) noBack() }
   window.onunload = function() { void (0) }
    window.location.href="/login";
}

//     
return(
  <>
     <nav>
  <input type="checkbox" id="check"/>
  <label for="check" class="checkbtn">
    <i class="fas fa-bars"></i>
  </label>
  <label for="" class="logo">
    <img src={logo}></img>
    <div className="clubname">
    <h2>Celestial</h2><br>
    </br>
    <h3>Biscuit</h3><br></br>
    <h3>IGDTUW</h3>
    </div>
  </label>
  <ul>
  <div className="borderlinks">
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/posts">Posts</Link></li>
    </div>
    <li><Link to="/logout" onClick={logoutSubmit}>Logout</Link></li>
   <li>
   <div class="dropdown">
  <button class="dropbtn">User ({user.username})</button>
  <div class="dropdown-content">

    <a href="/createPost">Create New Post</a><br></br>
    <a href="/posts/user">Your Posts</a><br></br>
    <a href="/user/submissions">Your Submissions</a>
  </div>
</div>
</li>
    
  </ul>
</nav>
<hr></hr>
  </>
)
}
export default Header2;