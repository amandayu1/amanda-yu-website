import React from 'react'
import "../App.css";
import { Button } from './Button';
import "./Landing.css";


function Landing() {
    return (
        <div className="landing-container">
            <img src="images/landing-img.jpg" alt="Page Banner, welcome to the page."></img>
            <h1>Amanda Yu</h1>
            <p>Welcome to my website.</p>
            
            {/*Landing page button*/}
            <div className="landing-btn">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    My Resume
                </Button>
                <Button className="btns" buttonSize="btn--large" path="projects">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Landing
