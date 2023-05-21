import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useSelector } from "react-redux";
//import shop2 from "../components/assets/shop2.avif"

export default function Header(){
    const navigate=useNavigate();

    const {loggedUser,login}=useSelector((state)=>state);
    console.log(login)
    

    const handleLogout=(e)=>{
        signOut(auth)
        .then(()=>{
            //setLoginLogin(!login);
            alert("You have successfully logged in...")
            navigate("/");
            window.location.reload();
            
        })
        .catch((err)=>console.log(err))
    };

    return(
        <div className="header">
            {/*<img className="shop2" src={shop2} style={{width:70, height:80}} alt="shopping logo"/>*/}

            <span className="title">Shopping Cart</span>
            <div className="home-container">
                <div className="home">
                    <button className="btn-home" onClick={()=>navigate("/")}>Home</button>
                    <button className="btn-cart" onClick={()=>navigate("/cart")}>Cart</button>
                    <button onClick={()=>navigate("/orders")} className="btn-orders">
                        Orders
                    </button>
                    
                </div>
                <div className= "btn-orders-seg">
                    
                    {!loggedUser&&
                    <button onClick={()=>navigate("/login")}>
                        Login
                    </button>}

                    
                    <button onClick={()=>navigate("/signup")}>
                        SignUp
                    </button>

                    <div className="logout">
                    {loggedUser&&
                    login&&<button 
                    onClick={handleLogout} className="btn-logout">Logout</button>}
                    </div>

                    <button onClick={()=>navigate("/profile")} className="btn-orders">
                        My Profile
                    </button>
                </div>
            </div>
        </div>
    )
}