import React from "react"
import "../App.css";
import profile from './profile.png';

export function About() {
    return (
        <div className="about" id="about">
        <h1>About Me</h1>
        <div className="page-content">
        <p >
          <img
            id="profile"
            src={profile}
            alt="Amanda in a suit, background is Toronto buildings skyline"
          />
          Hi, I'm Amanda Yu, a Systems Design Engineering student at the
          University of Waterloo. I'm a tech enthusiast, product manager,
          software developer, and designer. I am currently seeking a co-op for
          the Winter 2023 term.
          <br /> <br />
          I'm always on the lookout for opportunities to grow my problem
          solving, technical, and leadership skills. If you'd like to talk about
          up-and-coming products, exercising, or anything in the tech field,
          feel free to reach out to me for a coffee chat!
        </p>
            </div>
        </div>
    );
}
