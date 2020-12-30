import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';

function Card(props) {
    return (
        <li className="card">
            <Link to={props.path} className="card-link">
                <figure data-category={props.label} className="card-img-wrap">
                    <img src={props.src} className="card-img" alt="Project Icon"/>
                </figure>
                
                <div className="card-description">
                    <h5 className="card-text">{props.text}</h5>
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
                        <Card
                            src="images/smartCart.png"
                            text= "Project text description"
                            label="Project at a hackathon"
                            path="/about"
                        />
                        <Card
                            src="images/coronavrus.jpg"
                            text= "Project text description"
                            label="Project at a TOHacks"
                            path="/about"
                        />
                    </ul>
                    <ul className="cards-items">
                        <Card
                            src="images/smartCart.png"
                            text= "Project text description"
                            label="Project at a hackathon"
                            path="/about"
                        />
                        <Card
                            src="images/coronavrus.jpg"
                            text= "Project text description"
                            label="Project at a TOHacks"
                            path="/about"
                        />
                         <Card
                            src="images/coronavrus.jpg"
                            text= "Project text description"
                            label="Project at a TOHacks"
                            path="/about"
                        />
                    </ul>
                </div>    
            </div> 
        </div>
    )
}

export default Cards
