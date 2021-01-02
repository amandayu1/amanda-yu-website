import React from 'react'
import "../App.css";
import { Button } from './Button';
import { ButtonExt } from './ButtonExt';
import "./Landing.css";


function Landing() {
    return (
        <div className="landing-container">
            <img id="background" src="images/landing-img.jpg" alt="Page Banner, welcome to the page."></img>
            <h1>Amanda Yu</h1>
            <p>Welcome to my website.</p>
            
            {/*Landing page button*/}
            <div className="landing-btn">

                <ButtonExt className="btns" buttonStyle="btn--outline" buttonSize="btn--large" path="images/Yu_Amanda.pdf">
                    My Resume
                </ButtonExt>

                <Button className="btns" buttonSize="btn--large" path="projects">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Landing
