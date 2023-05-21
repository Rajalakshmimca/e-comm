import { useSelector } from "react-redux";
import "./CartItem.css";

const CartItem=(props)=>{
    console.log(props);
    console.log(props.count);
    

    
    return(
        <div  className="cartContainer">

            <div className="imageContCart" >  
                <img src={props.image} alt="props.title"/>              
            </div>

            <div className="product_infoCart">
                <h4 className="product_title">{props.title}</h4>
                <h5 className="product_price">Price : {`$${props.price}`}</h5>
                <h5 className="product_rating">Rating : {props.rating.rate}</h5>
            </div>

            <div className="button_section">
                <button className="btnInc" onClick={props.incrementItem}>+</button>
                <span>{props.count}</span>
                <button className="btnDec" onClick={props.decrementItem}>-</button>
                <button className="btnRemove" onClick={props.removeItemFromCart}>Remove</button>
            
            </div>
        </div>
    );
}

export default CartItem;