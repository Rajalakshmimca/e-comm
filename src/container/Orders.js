import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../Firebase/firebase";

const Orders=()=>{

    const {orders,loggedUser}=useSelector((state)=>state);
    const [profileUserWithOrders, setProfileUserWithOrders]=useState([]);
    const [ordersTitle, setOrdersTitle]=useState([])
    console.log(orders);
    useEffect(()=>{
        //setOrdersTitle(orders.title);
        
            const orderColRef=query(collection(db, "profiles"),
            orderBy("created", "desc"));
            
            console.log(orderColRef);
            onSnapshot(orderColRef, (snapshot)=>{
                console.log(snapshot.docs);
                setProfileUserWithOrders(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                })));
            })
        },[]);
        console.log(profileUserWithOrders);
        const user = profileUserWithOrders?.find((userItem) => userItem.data.email === loggedUser);
        console.log(user);
    return(
        <div>
            {user&&
            <h3 style={{textAlign:"center", paddingTop:"10px"}}>Hi, {user.data.firstName} Your orders...</h3>}
            {user&&
            user.data.orders.map((element)=>
                <div  className="cartContainer">

            <div className="imageContCart" >  
                <img src={element.image} alt="element.title"/>              
            </div>

            <div className="product_infoCart">
                <h4 className="product_title">{element.title}</h4>
                <h5 className="product_price">Price : {`$${element.price}`}</h5>
                <h5 className="product_rating">Rating : {element.rating.rate}</h5>
            </div>

                
                </div>)}
            
        </div>
    );
}

export default Orders;