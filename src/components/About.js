import React from "react"
import "../App.css";

export function About() {
    return (
        <div className="about" id="about">
            <div className="page-content">
                <h1>About Me</h1>
                <img className='profile' src="images/profile.png" width="854" height="789" alt='Amanda in a suit, background is Toronto buildings skyline' />
                <p>Hi, I'm Amanda Yu, a student studying Systems Design Engineering at the University of Waterloo. I'm a tech enthusiast, product manager, and software developer. Feel free to reach out to me if you would like to meet up for a coffee chat! (Accepting online requests currently.)</p>
            </div>
        </div>
    );
}