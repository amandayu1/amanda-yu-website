import React from "react"
import "../../App.css";
import {Navbar} from "../Navbar";
import Footer from '../Footer';

export function Contact() {
    return(
        <div className="App">
            <Navbar header="Contact Me" />
            <Footer />
        </div>
    );
}