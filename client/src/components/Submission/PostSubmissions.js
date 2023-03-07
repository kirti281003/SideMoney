import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsubmissions, submissions } from "../../actions/subAction";
import { getUser } from "../../actions/userActions";
import AcceptRejectElement from "./AcceptRejectElement";
import "./PostSubmissions.css";

const PostSubmissions=()=>
{  const [visible, setVisible] =useState(3);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    };
    const dispatch=useDispatch();
    const{id}=useParams();
    const{subs,loading}=useSelector(state=>state.subs)
    console.log(subs);
    useEffect(()=>
    {
        dispatch(postsubmissions(id))
        dispatch(getUser())
    },[dispatch])

    
    return(
        <>
         <div className="gradient">
          <h1>YOUR SUBMISSIONS</h1>
          </div>
         <div className="flexbox">
        {
            subs &&
            subs.slice(0,visible).map(sub=>
            (
              <AcceptRejectElement sub={sub} id={id}/>
            )

            )
        }
        </div>
        <div className="showmore" >
        <button onClick={showMoreItems}  >Show More</button>
        </div>
        </>
    )
    
    // else{
    //     return(
    //         <>
    //          <div className="flexbox">
    //        No Submissions Yet
    //         </div>
    
    //         </>
    //     )
    // }

}
export default PostSubmissions;