import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { handleAddLoggedProfile, handleAddLoggedUser, handleAddOrders, modifyItem, removeItem } from "../redux/actions";
import {useNavigate} from "react-router-dom";
import "./Cart.css"
import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const Cart=()=>{

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [total, setTotal] = useState();
    const [errors, setErrors] = useState(0);
    const {list, loggedUser, profileUserList}=useSelector((state)=>state);
    console.log(list);
    console.log(loggedUser)
    const loggedProfile=profileUserList.find((listItem)=>listItem.data.email===loggedUser);
    console.log(loggedProfile);
    console.log(profileUserList);
    const incrementItem=(item)=>{
        console.log(item.count)
        dispatch(modifyItem({...item, count: item.count+1}));
    };

    const decrementItem=(item)=>{
        if(item.count===1){
            dispatch(removeItem(item))
        }
        else{
            console.log(item);
            dispatch(modifyItem({ ...item, count: item.count -1 }));
            
        }  
    };

    const removeItemFromCart=(item)=>{
        dispatch(removeItem(item));
    }

    useEffect(()=>{
        setTotal(list.reduce((acc,curr)=>acc+Number(curr.price)*curr.count,0),);
    },[list]);

    const handleAddPlaceOrder=()=>{

        if(loggedUser){
            dispatch(handleAddLoggedProfile(loggedProfile));
            dispatch(handleAddOrders(list));
            setErrors(1);
            
            navigate("/success");
            
        }
        else{
            alert("Please login to place order");
            navigate("/login");
        }
    }

    return(
        <div className="cart">
            
            {!errors&&list.length>0? 
            (<>
            <b className="total">SubTotal : ${total}</b>
            <div className="cartCont">
            {list.map((item)=>
            (<CartItem {...item}  key={item.id} 
            incrementItem={()=>incrementItem(item)} 
            decrementItem={()=>decrementItem(item)} 
            removeItemFromCart={()=>removeItemFromCart(item)}/>))}
            <div className="btn_place">
            <button className="btnOrder" onClick={handleAddPlaceOrder}>Place Order</button>
            </div>
            
            </div>
            </>)
            :<div className="no-items"><h3>No Items in the Cart.</h3></div>}
        </div>
    );
}

export default Cart;