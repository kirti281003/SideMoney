import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submissions } from "../../actions/subAction";
import { getUser } from "../../actions/userActions";
import SubElement from "./SubElement";
import "./PostSubmissions.css";

const Submissions=()=>
{const dispatch=useDispatch();
    const{subs,loading}=useSelector(state=>state.subs)
    useEffect(()=>
    {
        dispatch(submissions())
        dispatch(getUser());
    },[dispatch])
    return(
        <>
        <div className="gradient">
          <h1>SUBMISSIONS</h1>
          </div>
        <div className="flexbox">
        {
            subs &&
            subs.map(sub=>
            (
                <SubElement sub={sub}/>
            )

            )
        }
        </div>

        </>
    )

}
export default Submissions;