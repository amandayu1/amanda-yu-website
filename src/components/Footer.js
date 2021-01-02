import { Link } from 'react-scroll';
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
        <div className="footer-link-wrapper">
            <div className="footer-link-item">
              <h2>About Me</h2>
                <Link className="footer-link" activeClass="active" to="home" spy={true} smooth={true} duration={1250}>Home</Link>
                <Link className="footer-link"activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={1250}>About Me</Link>
                <Link className="footer-link" activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={1250}>Projects</Link>
                <a className="footer-link" href="images/Yu_Amanda.pdf" target="_blank">Resume</a>
                
                {/* 
                <BlobProvider document={MyDoc}>
                {({ url }) => (
                  <a href={url} target="_blank">Open in new tab</a>
                )}
              
                </BlobProvider>
                <a href='/api/v1/print/example.pdf' target='_blank'></a>
                */}
              </div>
            <div className="footer-link-item">
              <h2>Development Projs</h2>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/PREPosition-website" rel="noreferrer">Preposition</a>
              <a className="footer-link" target="_blank" href="http://waterloobasics.com/" rel="noreferrer"> Waterloo Basics</a>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/amanda-yu-website" rel="noreferrer">Portfolio Website</a>
              <a className="footer-link" target="_blank" href="https://github.com/amandayu1/unzucc.me" rel="noreferrer">Unzucc.me</a>
              <a className="footer-link" target="_blank" href="https://devpost.com/software/grocery-app-n0ps83" rel="noreferrer">Smart Cart</a>
            </div>
            <div className="footer-link-item">
              <h2>Design Projs</h2>
              <a className="footer-link" target="_blank" href="https://amandayu2002.wixsite.com/thereachinitiative" rel="noreferrer"> The Reach Initiative</a>
              <a className="footer-link"  target="_blank" href="https://www.streamsyndicate-canada.com/" rel="noreferrer">Stream Syndicate</a>
              <a className="footer-link" target="_blank" href="https://devpost.com/software/coronavrus" rel="noreferrer">Coronavrus</a>
            </div>
          </div>
          {/*end of footer link wrapper*/}
        

        {/*footer social media section*/}
        <section className="social-media">
          <div className="social-media-wrap">
            <small className="website-rights">
             Powered by Heroku
            </small>
            <div className="social-icons">
            <a href="mailto: amanda.yu@uwaterloo.ca"
                className="social-icons-link email"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <i className="far fa-envelope"></i>
              </a>
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
            </div>
            <small className="website-rights">
             Created using React © {year}
            </small>
          </div>
        </section>
      </footer>
    )
  }

  export default Footer;