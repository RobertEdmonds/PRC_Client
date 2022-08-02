import React from "react";
import CartImage from "./shopping-cart-16.png";

function Cart(){
    return(
        <div className="Cart-view">
            <button className="Cart-button"><img src={CartImage} alt="cart"/></button>
            <p className="User-name">Users name</p>
            <button>Logout</button>
        </div>
    )
}

export default Cart