import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard=(props)=>{
const navigate=useNavigate();
    return(
        <div  className="container">
            <div className="imageCont" onClick={()=>navigate(`/product/${props.id}`)}>
                
                <img src={props.image} alt="props.title"/>
                
                
            </div>
            <div className="product_info">
                <h4 className="product_title">{props.title}</h4>
                <h5 className="product_price">Price : {`$${props.price}`}</h5>
                <h5 className="product_rating">Rating : {props.rating.rate}</h5>
            </div>
            <div>
                {props.rating.count>0? 
                <button className="btn_avail" onClick={()=>navigate(`/product/${props.id}`)}>Available</button>
                :<button className="btn_not_avail">Out Of Stock</button>}
            </div>
            
        </div>
    );
}

export default ProductCard;