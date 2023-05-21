import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import "./Product.css"
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "../redux/actions.js";
import { useNavigate } from "react-router-dom";

const Product=()=>{

    const params=useParams();
    console.log(parseInt(params.id));
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const props=ProductList.find((element)=>element.id===parseInt(params.id));
    console.log(props);
    const {list}=useSelector((state)=>state);

    const element= list.find((item)=>item.id===props.id);

    const addToCart=()=>{
        dispatch(addItem(props));
    };
    return(
        <div>
            
            <div  className="container">
            <div className="imageCont">
                
                <img src={props.image} alt="props.title"/>
                
                
            </div>
            <div className="product_info">
                <h4 className="product_title">{props.title}</h4>
                <h5 className="product_price">Price : {`$${props.price}`}</h5>
                <h5 className="product_rating">Rating : {props.rating.rate}</h5>
            
            </div>
            <div>
                {props.rating.count>0? 
                <>
                {/*<button className="btn_avail" onClick={()=>navigate("/success")}>Buy Now</button>*/}
                {element?.count>0 ?(
                <button className="btn_cart" onClick={()=>navigate("/cart")}>Go To Cart</button>)
                :(<button className="btn_cartAdd" onClick={addToCart}>Add To Cart</button>)}
                
                </>
                :<button className="btn_not_avail">Out Of Stock</button>}
            </div>
            
        </div>

        </div>
    );
}

export default Product;