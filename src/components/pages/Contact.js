import React from "react"
import "../../App.css";
import {Navbar} from "../Navbar";
import Footer from '../Footer';

export function Contact() {
    return(
        <div className="contact">
            <Navbar header="Contact Me" />
            <h1 className="About">About Page</h1>
            <Footer />
        </div>
    );
}