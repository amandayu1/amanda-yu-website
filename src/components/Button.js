import React from 'react'
import { Link } from 'react-scroll';
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = [ "btn--med", "btn--large"];

export const Button =({children, type, onClick, buttonStyle, buttonSize, path}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize: SIZES[0];
    return(
        <Link activeClass="active" to={path} spy={true} smooth={true} duration={1000}>
            <button
                className= {`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
            {children}
            </button>
        </Link>
    )
}