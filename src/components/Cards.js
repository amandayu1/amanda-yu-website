import React from 'react';
import {Link} from 'react-router-dom';

function Card() {
    return (
        <>
            <li className="cards">
                <Link className="cards-link">
                    <figure className="cards-img-wrap">
                        <img className="cards-img" src="/" alt="Project Icon"></img>
                    </figure>
                    <div className="cards-description">
                        <div className="cards-text">

                        </div>
                    </div>
                </Link>
            </li>  
        </>
    )
}

export function Cards(){
    return(
        <div className ="cards-container">
            <h1>Check out these awesome projects!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Card />
                    </ul>
                </div>    
            </div> 
        </div>
    )
}

export default Cards
