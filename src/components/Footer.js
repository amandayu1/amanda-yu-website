import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer({listThing, year}){
    return(
      <footer className="footer-container">
        <section className="footer-contact">
          <p className="footer-contact-heading" id="contact">Contact me</p>
            <div>
            <form>
              <input className="footer-input" type="email" name="email" placeholder="Your Email"></input>
              <Button buttonStyle="btn--outline">Submit</Button> 
            </form>
          </div>
        </section>

        {/*footer link section*/}
        <div className="footer-link">

          <div className="footer-link-wrapper">
            <div className="footer-link-item">
            <h2>About Me</h2>
              <Link to="/">Home</Link>
              <Link to="/contact">Resume</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/about">About Me</Link>
            </div>
            <div className="footer-link-item">
            <h2>Projects</h2>
              <Link to="/">Waterloo Basics</Link>
              <Link to="/">Preposition</Link>
              <Link to="/">Unzucc.me</Link>
              <Link to="/">Smart Cart</Link>
            </div>
          </div>
          {/*end of footer link wrapper*/}
        </div>

        {/*footer social media section*/}
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-media-logo">
                <Link to='/' className="social-logo">
                  Amanda Yu {/*<i className='fab fa-typo3'/>*/}
                </Link>
            </div>
            <small className="website-rights">
              Copyright © {year}
            </small>
            <div className="social-icons">
              <Link to="/"
                className="social-icons-link email"
                target="_blank"
                aria-label="Email"
              >
                <i className="far fa-envelope"></i>
              </Link>
              <Link to="/"
                className="social-icons-link github"
                target="_blank"
                aria-label="Github"
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link to="/"
                className="social-icons-link linkedin"
                target="_blank"
                aria-label="Linkedin"
              >
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </section>
      </footer>
    )
  }

  export default Footer;