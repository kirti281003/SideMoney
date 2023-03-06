import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptedsubmissions, submissions } from "../../actions/subAction";

const Accepted=()=>
{const dispatch=useDispatch();
    const{subs,loading}=useSelector(state=>state.subs)
    useEffect(()=>
    {
        dispatch(acceptedsubmissions())
    },[dispatch])
    return(
        <>
        {
            subs &&
            subs.map(sub=>
            (
                <div>
                    {
                        sub.body
                    }
                </div>
            )

            )
        }

        </>
    )

}
export default Accepted;