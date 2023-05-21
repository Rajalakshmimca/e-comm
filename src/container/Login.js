//import "./login.css";
import { Profiler, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { auth, db } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { handleAddLoggedProfile, handleAddLoggedUser, handleAddProfileUserList, handleAddToggleLogin } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
//import Header from "./Header";
import shop from "../components/assets/shop.png";

const Login=()=>{

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [user, setUser]=useState("");
    const [profileUser, setProfileUser]=useState();
    const {loggedUser}=useSelector((state)=>state);

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
            const user=userCredential.user;
            dispatch(handleAddToggleLogin(true));
            dispatch(handleAddLoggedUser(user.email));
            console.log(user.email);
            setUser(user.email)
            //console.log(user);
            setEmail("");
            setPassword("");
            navigate("/");
        })
        .catch((e)=>console.log(e));
        dispatch(handleAddProfileUserList(profileUser));

        {/*console.log(profileUser);
        console.log(user.email);
        console.log(loggedUser);
        const loggedProfile=profileUserList?.find((userItem)=>
        userItem.data.email===user.email&&userItem.data);
        console.log(loggedProfile)
        //dispatch(handleAddLoggedProfile(loggedProfile));
        dispatch(handleAddProfileUserList(profileUser));
    console.log(profileUser);*/}
    }
    //console.log(user)
    useEffect(()=>{
        
            const signUpUserRef=query(collection(db, "profiles"),
            orderBy("created", "desc"));
            
            console.log(signUpUserRef);
            onSnapshot(signUpUserRef, (snapshot)=>{
                console.log(snapshot.docs);
                setProfileUser(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                })));
            })
            
        },[]);
        console.log(profileUser);
        
    return(
        <div>
        <div className="loginContainer">
            <img className="shopLogo" src={shop} style={{width:120, height:100}} alt="shop logo"/>
            <h1>Welcome Back</h1>
            <p>Login to your account to play quiz and take the great challenges.</p>
            <form className="loginFormContainer" onSubmit={handleSubmit}>
                
                    <input type="email" 
                    value={email} 
                    placeholder="Enter Your Email..." 
                    onChange={(e)=>setEmail(e.target.value)}/>
                
                    <input type="password" 
                    value={password} 
                    placeholder="Enter Your Password..." 
                    onChange={(e)=>setPassword(e.target.value)}/>
                
                    <button className="btn-login">
                        Login
                    </button>
                
                    <p>Not Yet Registered? <Link to="/signup">Signup Here</Link></p>
                

            </form>
            </div>
        </div>
    );
}

export default Login;