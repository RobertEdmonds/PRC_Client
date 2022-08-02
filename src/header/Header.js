import React from "react";
import './Header.css';
import Login from "./Login";
import Cart from "./Cart";

function Header(){
    return(
        <>
        <div className="Header">
                <h3 className="Top-title">PRC <br/> Rifles</h3>
                <Login />
                <Cart />
        </div>
        </>
    )
}

export default Header