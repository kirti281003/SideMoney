import React,{Fragment, useEffect, useState} from "react";
import {Link, useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { register } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import signDark from "../../images/signdark.png";
import signLight from "../../images/signlight.png";
import spiralleft from "../../images/spiralleft.png";


function Signup()
{const dispatch=useDispatch();
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const{loading,isAuthenticated,user,error}=useSelector(state=>state.user)
    const registerSubmit=(e)=>
    {e.preventDefault();
        dispatch(register(email,password,name,username))
        if(error)
        {
            window.alert(error);
        }

  
    }
    useEffect(()=>
    {
        if(isAuthenticated)
        {
            window.alert("Successful");
            window.location.href=`/user`;
        }

    
        

    },[isAuthenticated])

//    return(
//         <>
//             <div class="loginContainer">
// 	<div class="screen">
// 		<div class="screen__content">
// 			<form class="signup" onSubmit={registerSubmit} method="POST" action="/login">
//             <div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
// 					<input type="text" class="signinput" placeholder="Enter Name"
//                          onChange={(e)=>setName(e.target.value)}
//                     />
// 				</div>
//                 <div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
// 					<input type="text" class="signinput" placeholder="Enter Username"
//                          onChange={(e)=>setUsername(e.target.value)}
//                     />
// 				</div>
// 				<div class="login__field">
// 					<i class="login__icon fas fa-user"></i>
// 					<input type="text" class="signinput" placeholder="Enter Email"
//                          onChange={(e)=>setEmail(e.target.value)}
//                     />
// 				</div>
// 				<div class="login__field">
// 					<i class="login__icon fas fa-lock"></i>
// 					<input type="password" class="signinput" placeholder="Enter Password"
//                          onChange={(e)=>setPassword(e.target.value)}
//                     />
// 				</div>
// 				<button class="button login__submit">
// 					<span class="button__text">SignUp</span>
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
         <div className="sign">
        <img src={spiralleft} className="spiralright"/>
        <form class="sign" onSubmit={registerSubmit} method="POST" action="/login">
        <div className="signtop">
        <span>START YOUR JOURNEY</span>
        <h1>Sign In Now!</h1>
        <span>Don't have an account?<Link className="signup">Sign Up</Link></span>
        </div>
             <div class="loginfield">
             <h1 className="signhead">Name</h1>
 					<input type="text" class="signinput" 
                          onChange={(e)=>setName(e.target.value)} />
 				</div>
                 <div class="loginfield">
                 <h1 className="signhead">Username</h1>
 					<input type="text" class="signinput" 
                          onChange={(e)=>setUsername(e.target.value)} />
 				</div>
 				<div class="loginfield">
                 <h1 className="signhead">E-mail</h1>
 					<input type="text" class="signinput" 
                          onChange={(e)=>setEmail(e.target.value)}
                     />
 				</div>
 				<div class="loginfield">
                 <h1 className="signhead">Password</h1>
 					<input type="password" class="signinput" 
                          onChange={(e)=>setPassword(e.target.value)}/>
 				</div>
 				<button class="button signsubmit">
 					<span class="buttontext">Sign Up</span>
 					
 				</button>				
 			</form>
      
        </div>
    </>
)
}
export default Signup;