import React from "react"
import "../../App.css";
import {Navbar} from "../Navbar";
import Footer from '../Footer';

export function About() {
    return(
        <div className="about">
            <Navbar header="About Page"/>
            <h1 className="about">About Page</h1>
            <Footer />
        </div>
    );
}