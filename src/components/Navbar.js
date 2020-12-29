import React, { useState } from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";
import { Button } from './Button';

export function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	
	const showButton = () =>{
		if(window.innerWidth <= 960){
			setButton(false);
		}
		else {
			setButton(true);
		}
	};
	
	window.addEventListener("resize", showButton);
	
	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					{/*toggle icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					{/*toggle appear/ disseaper*/}
					<ul className={click ? "nav-menu active" : "nav-menu"} >
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
