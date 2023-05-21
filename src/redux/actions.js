import { 
    ADD_ITEM, 
    MODIFY_ITEM, 
    REMOVE_ITEM,
ADD_LOGGED_PROFILE, 
ADD_LOGGED_USER, 
ADD_TOGGLE_LOGIN,
ADD_ORDERS,
ADD_PROFILE_USER_LIST, } from "./actionTypes.js";

export const addItem=(payload)=>{
    return{
        type : ADD_ITEM,
        payload,
    };
};

export const modifyItem=(payload)=>{
    return{
        type : MODIFY_ITEM,
        payload,
    };
};

export const removeItem=(payload)=>{
    return{
        type : REMOVE_ITEM,
        payload,
    };
};

export const handleAddLoggedProfile= (payload) => ({
        type: ADD_LOGGED_PROFILE,
        payload,
        });

    export const handleAddLoggedUser=(payload)=>({
        type:ADD_LOGGED_USER,
        payload,
    });

    export const handleAddToggleLogin=(payload)=>({
        type:ADD_TOGGLE_LOGIN,
        payload,
    });

    export const handleAddOrders=(payload)=>({
        type:ADD_ORDERS,
        payload,
    });

    export const handleAddProfileUserList=(payload)=>({
        type:ADD_PROFILE_USER_LIST,
        payload,
    });




