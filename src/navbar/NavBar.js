import React from "react";
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div className="navBar">
            <NavLink
                to="/"
                exact="true"
            >
                Home
            </NavLink>
            <NavLink
                to="/AR-10"
                exact="true"
            >
                AR-10
            </NavLink>
            <NavLink
                to="/223"
                exact="true"
            >
                223
            </NavLink>
            <NavLink
                to="/CustomBuild"
                exact="true"
            >
                Custom Build
            </NavLink>
            <NavLink
                to="/Apparel"
                exact="true"
            >
                Apparel
            </NavLink>
            <NavLink
                to="/Orders"
                exact="true"
            >
                Orders
            </NavLink>
        </div>
    )
}

export default NavBar