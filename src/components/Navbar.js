import React, { useState } from 'react'
import "./Navbar.css";
import { Link } from 'react-scroll';

export function Navbar({header}) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	
	return (
		<>
			<nav className="navbar">
			{/*Remember to change css so that there's a gap at the top
			<h1>{header}</h1>*/}
			<h1>Amanda Yu</h1>
				<div className="navbar-container">				
					{/*toggle icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					{/*toggle appear/ disseaper*/}
					<ul className={click ? "nav-menu active" : "nav-menu"} >
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="projects" spy={true} smooth={true} duration={1000}>Projects</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="about" spy={true} smooth={true} duration={1000}>About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-links" onClick={closeMobileMenu} activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar