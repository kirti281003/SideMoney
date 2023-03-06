import VectorLeft from "../../images/VectorLeft.png";
import VectorRight from "../../images/VectorRight.png";
import topright from "../../images/topright.png";
import bottomleft from "../../images/bottomleft.png";
import "./About.css";
function About(){
    return(
        <>
        <div className="aboutcontainer">
            <h1>About</h1>
            <div className="aboutbody">
            Welcome to Earn Side Money, your go-to platform for finding flexible and convenient ways to earn extra income. Our platform is designed to connect you with a range of side hustle opportunities that fit around your lifestyle and schedule. 
At Earn Side Money, we understand that life can be expensive, and sometimes, the regular pay check just isn't enough to cover all of your expenses. That's why we've created a user-friendly platform that provides easy access to a variety of side hustles, all in one place. Our platform allows you to post your own opportunities, and you can also apply for opportunities posted by others. This flexibility ensures that there is always something available for everyone, no matter what your skills, experience or schedule may be. Whether you're looking to earn a few extra bucks in your spare time or want to turn a side hustle into a full-time gig, we've got you covered. At Earn Side Money, we prioritize safety and security, ensuring that all our users are verified and trustworthy. We also provide a range of tools and resources to help you make the most of your side hustle, including tips for increasing your earnings and managing your time.
Join the Earn Side Money community today and start earning extra income on your own terms.
            </div>
        </div>
        <img src={topright} className="topright"></img>
        <img src={bottomleft} className="bottomleft"></img>

        </>
    )
}
export default About;