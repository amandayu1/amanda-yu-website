import React from 'react'
import "../App.css";
import { Button } from './Button';
import { ButtonExt } from './ButtonExt';
import "./Landing.css";


function Landing() {
    const subject = "Interested in Resume"
	const body = `Hi Amanda,
	%0D%0A%0D%0A  I was on your personal website and I'm would love for you to send me your resume. Hope to connect!
	%0D%0A%0D%0A  Thank you!`

    return (
        <div className="landing-container">
            <img id="background" src="images/landing-img.jpg" alt="Page Banner, welcome to the page."></img>
            <h1>Amanda Yu</h1>
            <p>Welcome to my website.</p>

            {/*Landing page button*/}
            <div className="landing-btn">

                <ButtonExt className="btns" buttonStyle="btn--outline" buttonSize="btn--large" path={`mailto:amanda.yu@uwaterloo.com?subject=${subject}&body=${body}`}>
                    Contact Me
                </ButtonExt>

                <Button className="btns" buttonSize="btn--large" path="projects">
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Landing
