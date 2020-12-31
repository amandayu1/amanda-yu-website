import React from "react"
import "../../App.css";
import {Navbar} from "./Navbar";
import Footer from './Footer';

export function About() {
    return(
        <div className="about">
            <Navbar header="About Page"/>
            <div className="page-content">
                <h1>All About Me</h1>
                <p>Hi, I'm Amanda Yu, a student studying Systems Design Engineering at the University of Waterloo. I'm a tech enthusiast, product manager, and software developer. Feel free to reach out to me if you would like to meet up for a coffee chat! (Accepting online requests currently.)</p>
            </div>
            <Footer year={new Date().getFullYear()}/>
        </div>
    );
}