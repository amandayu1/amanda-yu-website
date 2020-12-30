import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer({listThing, year}){
    return(
      <footer className="footer-container">
        <section className="footer-contact">
          <p className="footer-contact-heading">Contact me</p>
          <div>
            <form>
              <input className="footer-input" type="email" name="email" placeholder="Your Email"></input>
              <Button buttonStyle="btn--outline">Submit</Button> 
            </form>
          </div>
        </section>
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
            <h2>About Me</h2>
              <Link to="/">Home</Link>
              <Link to="/contact">Resume</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/about">About Me</Link>
            </div>
          </div>

          <div className="footer-link-wrapper">
            <div className="footer-link-item">
            <h2>About Me</h2>
              <Link to="/">Home</Link>
              <Link to="/contact">Resume</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/about">About Me</Link>
            </div>
            <div className="footer-link-item">
            <h2>About Me</h2>
              <Link to="/">Home</Link>
              <Link to="/contact">Resume</Link>
              <Link to="/contact">Contact Me</Link>
              <Link to="/about">About Me</Link>
            </div>
          </div>

        </div>
        
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-media-logo">
                <Link to='/' className="social-logo">
                  Home <i className='fab fa-typo3'/>
                </Link>
            </div>
            <small className="website-rights">
              Copyright © {year}
            </small>
            <div className="social-icons">
              <Link to="/"
                className="social-icons-link facebook"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="/"
                className="social-icons-link instagram"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
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