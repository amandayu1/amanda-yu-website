import React from "react"
import "../App.css";
import profile from './profile.png';

export function About() {
    return (
        <div className="about" id="about">
        <h1>About Me</h1>
        <div className="page-content">
                <p>
                    <img id="profile" src={profile} alt='Amanda in a suit, background is Toronto buildings skyline'/>
                    Hi, I'm Amanda Yu, a student studying Systems Design Engineering at the University of Waterloo. I'm a tech enthusiast, product manager, software developer, and designer. Feel free to reach out to me if you would like to meet up for a coffee chat! (Accepting online requests currently.)
                </p>
            </div>
        </div>
    );
}