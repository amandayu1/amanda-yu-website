import React from "react"
import "../App.css";
import {Navbar} from "./Navbar";
import Footer from './Footer';

export function About() {
    return(
        <div className="about" id="about">
            <div className="page-content">
                <h1>All About Me</h1>
                <img className='profile' alt='Picture of Myself' src="images/profile.png"/>
                <p>Hi, I'm Amanda Yu, a student studying Systems Design Engineering at the University of Waterloo. I'm a tech enthusiast, product manager, and software developer. Feel free to reach out to me if you would like to meet up for a coffee chat! (Accepting online requests currently.)</p>
            </div>
        </div>
    );
}