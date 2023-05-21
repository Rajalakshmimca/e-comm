import React, { useEffect, useState } from "react";
import { ProductList } from "../data/ProductList";
import ProductCard from "../components/ProductCard";
import "./Dashboard.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { handleAddLoggedProfile } from "../redux/actions";
//import shop from "../components/assets/shop.png";

export default function Dashboard(){
    const dispatch=useDispatch();
    const {loggedUser}=useSelector((state)=>state);
    const [profileUser, setProfileUser]=useState();
    console.log(loggedUser)

         
    
    return(
        <div className="products_display">
            {ProductList.map((product)=><ProductCard {...product} key={product.id}/>)}
        </div>
    )
}