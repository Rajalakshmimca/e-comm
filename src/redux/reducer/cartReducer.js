import { 
    ADD_ITEM, 
    MODIFY_ITEM, 
    REMOVE_ITEM,
    ADD_LOGGED_PROFILE,
    ADD_LOGGED_USER,
    ADD_TOGGLE_LOGIN, 
    ADD_ORDERS,
    ADD_PROFILE_USER_LIST,} from "../actionTypes";

const initialState={
    list:[],
    loggedProfile:{},
    loggedUser: "",
    login: false,
    profileUserList:[],
    orders:[],
};

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                list: [...state.list, {...action.payload, count: 1}],

            };

            case REMOVE_ITEM:
                const index=state.list.findIndex((product)=>product.id===action.payload.id);
                return{
                    
                    ...state,
                    list:[...state.list.slice(0, index),
                    ...state.list.slice(index+1),]
                };
            case MODIFY_ITEM:
                const index1=state.list.findIndex((product)=>product.id===action.payload.id);
                return{
                    ...state,
                    list:[...state.list.slice(0, index1),
                    {...state.list[index1], count: action.payload.count},
                    ...state.list.slice(index1+1),]
                }

                case ADD_LOGGED_PROFILE:
            return{
                ...state,
                loggedProfile: action.payload,
            }

        case ADD_LOGGED_USER:
            console.log(action.payload);
            return{
                ...state,
                loggedUser:action.payload,
            }

            case ADD_TOGGLE_LOGIN:
            console.log(action.payload);
            return{
                ...state,
                login:action.payload,
            }

            case ADD_ORDERS:
            return{
                ...state,
                orders: [...state.orders, ...action.payload,],

            };

            case ADD_PROFILE_USER_LIST:
                console.log(action.payload)
            return{
                ...state,
                profileUserList: [...state.profileUserList, ...action.payload],

            };


                default:
                    return state;
    }
};

export default cartReducer;