import boy from "../../images/boy.png";
import "./HomeCard.css";
function HomeCard(props)
{
    return(
        <>
        
        <div className="homecard">
            <div className="boyimage">
            <img src={boy} className="boyImg"></img>

            </div>
            <div className="footer">{props.body}</div>
        </div>

        </>
    )
}
export default HomeCard;