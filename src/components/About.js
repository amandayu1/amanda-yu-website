import React from "react"
import "./styles/About.css";

export function About() {
    return (
        <div className="about" id="about">
        <h1>About Me</h1>

      {/*social media section*/}
      <section className="experience-socials">
          <div className="social-media-wrap">
            <div className="social-icons">

              <a href="https://github.com/amandayu1"
                className="social-icons-link github"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/amandayu1/"
                className="social-icons-link linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="mailto: amanda.yu@uwaterloo.ca"
                className="social-icons-link email"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <i className="far fa-envelope"></i>
              </a>

            </div>
          </div>
        </section>

        <div className="page-content">
        <p >
          <img
            id="profile"
            src="images/pfp.png"
            alt="Amanda in a black turtle neck, background is in The Highline in New York City."
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
