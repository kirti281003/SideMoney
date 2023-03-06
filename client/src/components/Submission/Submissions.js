import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submissions } from "../../actions/subAction";
import { getUser } from "../../actions/userActions";
import SubElement from "./SubElement";
import "./PostSubmissions.css";

const Submissions=()=>
{  const [visible, setVisible] =useState(3);

    const showMoreItems = () => {
      setVisible((prevValue) => prevValue + 3);
    };
    const dispatch=useDispatch();
    const{subs,loading}=useSelector(state=>state.subs)
    useEffect(()=>
    {
        dispatch(submissions())
        dispatch(getUser());
    },[dispatch])
    if(visible>subs.length){
        var  style={
            backgroundColor:"#282828",
            
          }
          var btnstyle={
            color:"#282828"
          }
        }
    return(
        <>
        <div className="gradient">
          <h1>SUBMISSIONS</h1>
          </div>
        <div className="flexbox">
        {
            subs &&
            subs.slice(0,visible).map(sub=>
            (
                <SubElement sub={sub}/>
            )

            )
        }
        </div>
        <div className="showmore" style={style}>
        <button onClick={showMoreItems} style={btnstyle} >Show More</button>
        </div>
        </>
    )

}
export default Submissions;