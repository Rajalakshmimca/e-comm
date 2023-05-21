import { useNavigate } from "react-router-dom";
import "./Success.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Timestamp, addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const Success=()=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();
    //const [orders, setOrders]=useState([])
    const { orders, loggedUser, loggedProfile}=useSelector((state)=>state);
    console.log(loggedProfile);
    console.log(orders);
    //console.log(orders[0].0.title)
    //const orders1=orders.map((order)=>order.title);
    //console.log(orders1)
    //console.log(loggedProfile);
    //console.log(orderTitle);

        //console.log(orders)

        useEffect(()=>{
            console.log(orders);
            const profileDocRef=doc(db, "profiles", loggedProfile.id);
        console.log(profileDocRef);
        
            setDoc(profileDocRef, {orders: arrayUnion(...orders)}
                ,{merge: true});

        },[orders]);
    
        const handleSubmit=()=>{
            
            navigate("/orders");
        }
    return(
        <div className="alertMsg">
            Your order have been placed successfully...
            <button className="btnHome" 
            onClick={handleSubmit}>
                View your orders...
                </button>
        </div>
    );
}

export default Success;