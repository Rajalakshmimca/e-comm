import { useDispatch } from "react-redux";
import { handleAddLoggedProfile } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import profilePic from "../components/assets/profilePic.jpg";

const ShowDetails=({profileUserList, loggedUser} )=>{

    const navigate = useNavigate();
    //const dispatch=useDispatch();
    
    console.log(profileUserList);
    console.log(loggedUser);
    const loggedProfile = profileUserList?.find((his) => his.data.email === loggedUser);
//console.log(user);

    const handleClick=()=>{
        //dispatch(handleAddLoggedProfile(user));
        navigate("/edit");
    }
    return(
        <div className="showCont">
            <div className="profile">
                {loggedProfile&&
                <div>
                <img src={profilePic} alt="profile logo" style={{width:50, height:50}} />
                <p>{loggedProfile?.data.firstName} {loggedProfile?.data.lastName}</p>
                </div>}
                
            </div>
            {loggedProfile?
            (<div className="showDetails">
            <p>First Name : {loggedProfile.data.firstName}</p>
            <p>Last Name : {loggedProfile.data.lastName}</p>
            <p>Email : {loggedProfile.data.email}</p>
            <p>Age: {loggedProfile.data.age}</p>
            <p>City: {loggedProfile.data.city}</p>
            <p>State: {loggedProfile.data.state}</p>
            <p>Country: {loggedProfile.data.country}</p>
            </div>)
            :<p>Please Login/Signup to view your profile.</p>
            }
            {loggedProfile&&
        <div  className="btn-edit">
            <button onClick={handleClick}>Edit</button>
        </div>
        }
        </div>

    );
}

export default ShowDetails;