import React from 'react'
import "../App.css";
import { Button } from './Button';
import "./Landing.css";


function Landing() {
    return (
        <div className="landing-container">
            <img src="/images/landing-img.jpg" alt="Page Banner, welcome to the page."></img>
            <h1> Welcome to my website.</h1>
            <p>Inspirational tagline</p>
            
            {/*Landing page button*/}
            <div className="landing-btn">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    My Resume
                </Button>
                <Button className="btns" buttonSize="btn--large">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Landing
