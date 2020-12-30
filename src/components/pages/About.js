import React from "react"
import "../../App.css";
import {Navbar} from "../Navbar";
import Footer from '../Footer';

export function About() {
    return(
        <div className="App">
            <Navbar header="About Page"/>
            <Footer />
        </div>
    );
}