import React from "react"
import {Link, useLocation} from "react-router-dom"

import { Navbar } from "./Navbar";
import {HomePage} from "./HomePage";

export function Home() {
    return(
        <div>
            <h1>My Personal Website</h1>
            <Navbar />
            <HomePage />
        </div>
    );
}

export function About() {
    return(
        <div>
            <h1>About Page</h1>
            <Navbar />
        </div>
    );
}

export function Contact() {
    return(
        <div>
            <h1>Contact Me</h1>
            <Navbar />
        </div>
    );
}

export function Error404(){
    let location = useLocation();
    return(
        <>
        <h1> This page does not exist. Resource not found at {location.pathname}!</h1>
        </>
    )
}