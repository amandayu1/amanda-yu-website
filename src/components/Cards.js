import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

function Cards() {
	return (
	  <div className='cards'>
		 <h1>Check out my projects.</h1>
		 <div className='cards__container'>
			<div className='cards__wrapper'>
			<h1>Development</h1>
			  <ul className='cards__items'>
			  <CardItem
					src='images/unzucc.png'
					text='Created at Citizen Hacks. https://github.com/amandayu1/unzucc.me'
					label='Unzucc.me'
					path='/progress'
				 />
				 <CardItem
					src='images/smartCart.png'
					text='Grocery App on mobile used to scan items, created at Citizen Hacks. https://devpost.com/software/grocery-app-n0ps83'
					label='SmartCart '
					path='/progress'
				 />
			  </ul>
			  <h1>Design</h1>
			  <ul className='cards__items'>
			  <CardItem
					src='images/reach.png'
					text='Created using Wix during FIRST Robotics STEMAThon. https://amandayu2002.wixsite.com/thereachinitiative'
					label='The Reach Initiative'
					path='/progress'
				 />
				 <CardItem
					src='images/stream.png'
					text='Created using Wix for a non-profit young organization https://www.streamsyndicate-canada.com/'
					label='STREAM Syndicate'
					path='/progress'
				 />
				<CardItem
					src='images/coronavrus.jpg'
					text='An educational augmented reality app to show you how long COVID-19 can live on different surfaces. Created at Citizen Hacks https://devpost.com/software/coronavrus'
					label='Coronavrus'
					path='/progress'
				 />
			  </ul>
			</div>
		 </div>
	  </div>
	);
 }

 export default Cards;

