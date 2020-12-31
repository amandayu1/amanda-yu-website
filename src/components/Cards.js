import React from 'react';
import { CardItem } from './Card';
import './Cards.css';

function Cards() {
	return (
	  <div className='cards' id="projects">
		 <h1>Check out my projects.</h1>
		 <div className='cards__container'>
			<div className='cards__wrapper'>
			<h1>Development</h1>
			  <ul className='cards__items'>
			  <CardItem
					src='images/prep.png'
					text='Website for non-profit youth organization, created as a personal project'
					label='Preposition'
					path='https://github.com/amandayu1/PREPosition-website'
				/>
				<CardItem
					src='images/waterloo.png'
					text='Website for incoming and current UWaterloo students, created as a personal project'
					label='Waterloo Basics'
					path='http://waterloobasics.com/'
				 />
				 </ul>
				 <ul className='cards__items'>
				 <CardItem
					src='images/portfolio.png'
					text='Portfolio website, created using React, deployed with Heroku.'
					label='Personal Website'
					path='https://github.com/amandayu1/amanda-yu-website'
				 />
				 <CardItem
					src='images/unzucc.png'
					text='Anti-facial detection neural network. Created at Citizen Hacks.'
					label='Unzucc.me'
					path='https://github.com/amandayu1/unzucc.me'
				 />
				 <CardItem
					src='images/smartCart.png'
					text='Grocery App on mobile used to scan items, created at Hack the North.'
					label='SmartCart'
					path='https://devpost.com/software/grocery-app-n0ps83'
				 />
			  </ul>
				{/*Design Category*/}
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
				 <CardItem
					src='images/coronavrus.jpg'
					text='An educational augmented reality app to show you how long COVID-19 can live on different surfaces. Created at Citizen Hacks '
					label='Coronavrus'
					path='https://devpost.com/software/coronavrus'
				 />	  
				 </ul>
			</div>
		 </div>
	  </div>
	);
 }

 export default Cards;

