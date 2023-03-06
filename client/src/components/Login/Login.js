import React,{Fragment, useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { getUser, login } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import spiralleft from "../../images/spiralleft.png";
import  "./Login.css";
import User from "../User/User";


function Login()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const loginSubmit=(e)=>
    {e.preventDefault();
        dispatch(login(email,password))
      
      
  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {  window.location.href=`/posts`;
        
           
        }  
        if(error)
        {
            window.alert(error);
        }
       

    },[isAuthenticated,error])

//     return(
//         <>
//             <div class="loginContainer">
// 	<div class="screen">
// 		<div class="screen__content">
// 			<form class="login" onSubmit={loginSubmit} method="POST" action="/login">
// 				<div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
// 					<input type="text" class="logininput" placeholder="Enter Email"
//                          onChange={(e)=>setEmail(e.target.value)}
//                     />
// 				</div>
// 				<div class="login__field">
// 					<i class="login__icon fas fa-lock"></i>
// 					<input type="password" class="logininput" placeholder="Enter Password"
//                          onChange={(e)=>setPassword(e.target.value)}
//                     />
// 				</div>
// 				<button class="button login__submit">
// 					<span class="button__text">Login</span>
// 					<i class="button__icon fas fa-chevron-right"></i>
// 				</button>				
// 			</form>

// 		</div>
// 		<div class="screen__background">
// 			<span class="screen__background__shape screen__background__shape4"></span>
// 			<span class="screen__background__shape screen__background__shape3"></span>		
// 			<span class="screen__background__shape screen__background__shape2"></span>
// 			<span class="screen__background__shape screen__background__shape1"></span>
// 		</div>		
// 	</div>
// </div>
//         </>
//     )
return(
    <>
        <div className="loginContainer">
        <img src={spiralleft} className="spiralleft"/>
        <form class="login" onSubmit={loginSubmit} method="POST" action="/login">
        <div className="logintop">
        <span>START YOUR JOURNEY</span>
        <h1>Sign In Now!</h1>
        <span>Don't have an account?<Link className="signup" to="/signup">Sign Up</Link></span>
        </div>
        <div class="loginfield">
        <h1 className="loginhead">E-mail</h1>
				<input type="text" class="logininput" 
                         onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				<div class="loginfield">
                <h1 className="loginhead">Password</h1>
					<input type="password" class="logininput" 
                         onChange={(e)=>setPassword(e.target.value)}/>
                     				</div>
 				<button class="button loginsubmit"> 		
                			<span class="buttontext">Sign In</span>
 					
				</button>		

        </form>
        </div>
    </>
)
}
export default Login;