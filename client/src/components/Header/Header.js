import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
function Header() {
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
    </div>
    <li><Link to="/login" className="active">Login</Link></li>
    <li><Link to="/signup">SignUp</Link></li>
    
  </ul>
</nav>
<hr></hr>
  </>
)
}

export default Header;