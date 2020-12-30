import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';

function Card() {
    return (
        <li className="card">
            <Link to="/"className="card-link">
                <figure className="card-img-wrap">
                    <img className="card-img" alt="Project Icon"/>
                </figure>
                
                <div className="card-description">
                    <h5 className="card-text">TEXT</h5>
                </div>
            </Link>
        </li>
    )
}

export function Cards(){
    return(
        <div className ="cards">
            <h1>Check out these awesome projects!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <Card src="./images/smartCart.png" text="Project Logo"/>
                    </ul>
                </div>    
            </div> 
        </div>
    )
}

export default Cards
