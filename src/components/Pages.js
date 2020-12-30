import React from "react"
import {Link, useLocation} from "react-router-dom"
import {Cards} from "./Cards";

import {Navbar} from "./Navbar";
import {HomePage} from "./pages/HomePage";

export function Home() {
    return(
        <div>
            <Navbar header="My Website Homepage"/>
            <HomePage />
            <Cards />
        </div>
    );
}

export function About() {
    return(
        <div>
            <Navbar header="About Page"/>
        </div>
    );
}

export function Contact() {
    return(
        <div>
            <Navbar header="Contact Me" />
        </div>
    );
}

export function Error404(){
    let location = useLocation();
    return(
        <>
         <Navbar header="Error 404" />
        <h1> This page does not exist. Resource not found at {location.pathname}!</h1>
        </>
    )
}