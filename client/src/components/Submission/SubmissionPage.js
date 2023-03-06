import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubmission } from "../../actions/subAction";
import { getUser } from "../../actions/userActions";
import "./SubmissionPage.css";


const SubmissionPage=()=>{
    const dispatch=useDispatch();
    const {loading,sub}=useSelector(state=>state.sub)
    const links=sub.links;
    console.log(links);
    console.log(sub);
    const{id}=useParams();
    useEffect(()=>{
           dispatch(getSubmission(id))
           dispatch(getUser())
    },[dispatch])
    // return(
    //     <>
    //    <div className="subPage">
    //     <div className="subBody"><h2>Application</h2>{sub.body}
     
    //     </div>
 
    //     <img src={sub.image}>
    //     </img>
    //     <div className="linkSection">
    //     <h3>Connect With Applicants</h3>
    //     {links &&
    //     links.map(link=>
       
    //     (<div className="singleLink">
    //         <span className="linkhead">{link.title}</span>
         
    //         <a href={link.url} className="linkurl">{link.url}</a>
    //         </div>
    //     ))}
            
                
            
    //     </div>
    //     <h3 className="status">Status : {sub.accepted}</h3>
    //     </div>

    //     </>
    // )
    return(
        <>
             <div className="subpage">
            <h2>Status : {sub.accepted}</h2>
                <div className="gradient">
                <img src={sub.image} className="subimg"></img>
                </div>
                <div className="pitch">
                    <h4>Pitch</h4>
                    <p>{sub.body}</p>
                </div>
                <div className="links">
                    <h4>Links</h4>
                    {links &&
        links.map(link=>
       
        (<div className="singleLink">
            <span className="linkhead">{link.title}</span>
         
            <a href={link.url} className="linkurl">{link.url}</a>
            </div>
        ))}
                    
                  
               
                </div>
            </div>
        </>
    )

}
export default SubmissionPage;