import {createStore} from "redux";
import cartReducer from "./redux/reducer/cartReducer"

const store = createStore(cartReducer);
export default store;



