import React from "react"
import "../../App.css";
import {useLocation} from "react-router-dom"
import {Navbar} from "./Navbar";

export function Error404(){
    let location = useLocation();
    return(
        <div className="App">
         <Navbar header="Error 404" />
        <h1> This page does not exist. Resource not found at {location.pathname}!</h1>
        </div>
    )
}