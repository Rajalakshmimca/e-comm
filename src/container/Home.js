import React from "react";
import Header from "../components/Header";
import Dashboard from "./Dashboard";
import { Routes,Route } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Success from "./Success";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Orders from "./Orders";
import EditProfile from "./EditProfile";

export default function Home(){
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/edit" element={<EditProfile/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/success" element={<Success/>}/>
            </Routes>
        </div>
    )
}