import React,{Fragment, useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { registerPost } from "../../actions/postActions";
import { getUser } from "../../actions/userActions";
import loginImage from "../../images/login.png";
import "./SubmissionRegister.css";
import { registerSub } from "../../actions/subAction";

function SubmissionRegister()
{const dispatch=useDispatch();

    const {id,name}=useParams();
    const[body,setBody]=useState("");
    const[photo,setImage]=useState();
    const[link1head,setLink1head]=useState("");
    const[link1,setLink1]=useState("");
    const[link2head,setLink2head]=useState("");
    const[link2,setLink2]=useState("");
    const[link3head,setLink3head]=useState("");
    const[link3,setLink3]=useState("");
    const links=[{title:link1head,url:link1},{title:link2head,url:link2},{title:link3head,url:link3}];
    useEffect(()=>
    {dispatch(getUser());  

    },[dispatch])
    const submitSub=(e)=>
    {e.preventDefault();
        dispatch(registerSub(body,JSON.stringify(links),photo,id,name))
        window.alert("Successful Submission,Keep Checking Status On Your Profile")
        window.location.href="/user"
    }
    return(
        <>
            <form className="subform" action="/createPost" method="POST" onSubmit={submitSub}>
      <h1>Submit Application</h1>
              <hr></hr>
                <div class="login_field">
                <label>Pitch</label>
					<textarea type="text" rows="3" cols="70" class="textareainput" style={{color:"white"}} onChange={(e)=>setBody(e.target.value)}
                    />
				</div>
              

           
         
                <div class="login_field">
                <label>Link 1</label>
                <input type="text" class="sign__input" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink1head(e.target.value)}
                    />
					<input type="text" class="logininput" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink1(e.target.value)}
                    />
				</div>
                
                <div class="login_field">
                <label>Link 2</label>
                <input type="text" class="sign__input" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink2head(e.target.value)}
                    />
					<input type="text" class="logininput" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink2(e.target.value)}
                    />
				</div>
              
                <div class="login_field">
                <label>Link 3</label>
                <input type="text" class="sign__input" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink3head(e.target.value)}
                    />
					<input type="text" class="logininput" placeholder=" " style={{color:"white"}} onChange={(e)=>setLink3(e.target.value)}
                    />
				</div>
                
                <div class="login_field">
                <label>Add Image</label>
					<input type="file" class="logininput" placeholder=" "  onChange={(e)=>setImage(e.target.files[0])}
                    />
				</div>
                <hr></hr>
                <div className="button__section">
                <button className="green1">Submit</button>
                <button className="white">Close</button>
            </div>
               
            </form>
        </>
    )
}
export default SubmissionRegister;