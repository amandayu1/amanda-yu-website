import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
		<a target="_blank" href={props.path} rel="noreferrer" className="cards__item__link">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project Logo'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
		</a>
      </li>
    </>
  );
}

function Cards() {
	return (
	  <div className='cards' id="projects">
		 <h1>Check out my projects.</h1>
		 <div className='cards__container'>
			<div className='cards__wrapper'>
			<h1>Development</h1>
			  <ul className='cards__items'>
			  <CardItem
					src='images/unzucc.png'
					text='Anti-facial detection neural network. Created at Citizen Hacks.'
					label='Unzucc.me'
					path='https://github.com/amandayu1/unzucc.me'
				 />
				 <CardItem
					src='images/smartCart.png'
					text='Grocery App on mobile used to scan items, created at Hack the North.'
					label='SmartCart '
					path='https://devpost.com/software/grocery-app-n0ps83'
				 />
			  </ul>
			  <ul className='cards__items'>
			  <CardItem
					src='images/coronavrus.jpg'
					text='Website for incoming and current UWaterloo students, created as a personal project'
					label='Waterloo Basics'
					path='http://waterloobasics.com/'
				 />
				 <CardItem
					src='images/coronavrus.jpg'
					text='Website for non-profit youth organization, created as a personal project'
					label='Preposition'
					path='https://github.com/amandayu1/PREPosition-website'
				/>
			  </ul>
			  <h1>Design</h1>
			  <ul className='cards__items'>
			  <CardItem
					src='images/reach.png'
					text='Created using Wix during FIRST Robotics STEM-a-Thon.'
					label='The Reach Initiative'
					path='https://amandayu2002.wixsite.com/thereachinitiative'
				 />
				 <CardItem id="stream"
					src='images/stream.png'
					text='Created using Wix for a Canada wide non-profit young organization'
					label='STREAM Syndicate'
					path='https://www.streamsyndicate-canada.com/'
				 />	  
			  </ul>
			 
			</div>
		 </div>
	  </div>
	);
 }

 export default Cards;

