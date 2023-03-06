import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import "./PostRegister.css";

function PostRegister()
{const dispatch=useDispatch();
    const [heading,setHeading]=useState("");
    const[category,setCategory]=useState("");
    const[body,setBody]=useState("");
    const[skills,setSkills]=useState("");
    const[deadline,setDeadline]=useState("");
    const[steps,setsteps]=useState("");
    const[photo,setImage]=useState();
    const{loading,error,post}=useSelector(state=>state.post)
    useEffect(()=>
    {dispatch(getUser());
      
     

    },[dispatch])
    const submitPost=(e)=>
    {e.preventDefault();
        
        dispatch(registerPost(heading,category,body,skills,deadline,steps,photo))
        window.alert("Succesful Post");
        window.location.href="/user"
      
  
    }


    // return(
    //     <>
    //         <form className="postform" action="/createPost" method="POST" onSubmit={submitPost}>
    //         <div className="col">
    //         <label>Heading</label>
    //         <div class="loginfield">
					
	// 				<input type="text" class="login__input" style={{color:"white"}} onChange={(e)=>setHeading(e.target.value)}
    //                 />
	// 			</div>
    //             <label>Category</label>
    //             <div class="loginfield">
			
	// 				<input type="text" class="login__input" style={{color:"white"}} onChange={(e)=>setCategory(e.target.value)}
    //                 />
	// 			</div>
    //             <label>Add all the information about opportunity here</label>
    //             <div class="loginfield">
                
	// 				<textarea type="text" rows="10" cols="50" class="textarea__input" style={{color:"white"}} onChange={(e)=>setBody(e.target.value)}
    //                 />
	// 			</div>
    //             <label>Deadline</label>
    //         <div class="loginfield">
					
	// 				<input type="text" class="login__input" style={{color:"white"}} onChange={(e)=>setDeadline(e.target.value)}
    //                 />
	// 			</div>
    //             </div>
    //             <div className="col">
       
    //             <label>Skills Required</label>
    //             <div class="loginfield">
                
	// 				<textarea type="text" rows="5" cols="30" class="textarea__input" style={{color:"white"}} onChange={(e)=>setSkills(e.target.value)}
    //                 />
	// 			</div>
    //             <label>Steps/Other Instructions</label>
    //             <div class="loginfield">
                
	// 				<textarea type="text" rows="10" cols="50" class="textarea__input" style={{color:"white"}} onChange={(e)=>setsteps(e.target.value)}
    //                 />
	// 			</div>
    //             <label>Any Image You Want To Upload</label>
    //         <div class="loginfield">
					
	// 				<input type="file" class="login__input" placeholder=" " onChange={(e)=>setImage(e.target.files[0])}
    //                 />
	// 			</div>
    //             <button>Create Post</button>
    //             </div>
    //         </form>
    //     </>
    // )
    return(
        <>
             <form className="postform" action="/createPost" method="POST" onSubmit={submitPost}>
              <h1>Post Form</h1>  
             <hr></hr>
             <div class="login_field">
             <label>Heading</label>
             <input type="text" class="logininput" style={{color:"white"}} onChange={(e)=>setHeading(e.target.value)} />
			</div>
            <div class="login_field">
			<label>Category</label>
            <input type="text" class="logininput" style={{color:"white"}} onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <div class="login_field">
            <label>Description</label> 
    		<textarea type="text" rows="3" cols="100" class="textareainput" style={{color:"white"}} onChange={(e)=>setBody(e.target.value)}/>
    		</div>
            <div class="login_field">
            <label>Deadline</label>		
            <input type="text" class="logininput" style={{color:"white"}} onChange={(e)=>setDeadline(e.target.value)} />
            </div>
            <div class="login_field">
            <label>Skills</label>  
	       <input type="text"  class="logininput" style={{color:"white"}} onChange={(e)=>setSkills(e.target.value)} />
           </div>
           <div class="login_field">
           <label>Add Image</label>		
            <input type="file" class="logininput" placeholder=" " onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <hr style={{color:"white"}}></hr>
            
            <div className="button_section">
                <button className="green">Submit</button>
                <button className="white">Close</button>
            </div>
             </form>
        </>
    )
}
export default PostRegister;