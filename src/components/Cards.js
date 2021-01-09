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
					text='Website for non-profit youth organization, developed and designed entirely by myself.'
					label='PREPosition'
					path='https://github.com/amandayu1/PREPosition-website'
				/>
				<CardItem
					src='images/waterloo.png'
					text='Website for incoming and current UWaterloo students, gained over 1k views.'
					label='Waterloo Basics'
					path='http://waterloobasics.com/'
				 />
				 </ul>
				 <ul className='cards__items'>
				 <CardItem
					src='images/chat.png'
					text='Enter this chat room created with Firebase storage and authentication.'
					label='React Chat App'
					path='https://github.com/amandayu1/react-chat-app'
				 />
				 <CardItem
					src='images/portfolio.png'
					text='Portfolio website, created using React, deployed with Heroku.'
					label='Personal Website'
					path='https://github.com/amandayu1/amanda-yu-website'
				 />
			  </ul>
			  <ul className='cards__items'>
			  <CardItem
					src='images/smartCart.png'
					text='Grocery App on mobile used to scan items, created using React Native.'
					label='SmartCart'
					path='https://github.com/amandayu1/smart-cart/tree/master'
				 />
			  <CardItem
					src='images/nyan.png'
					text='OOP based collision game, created with JavaScript.'
					label='Avoid Nyan Cat'
					path='https://github.com/amandayu1/avoid-collision-game'
				 />
			  <CardItem
					src='images/unzucc.png'
					text='Anti-facial detection neural network. Created at Citizen Hacks.'
					label='Unzucc.me'
					path='https://github.com/amandayu1/unzucc.me'
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
					text='Created using Wix for a Canada wide non-profit young organization.'
					label='STREAM Syndicate'
					path='https://www.streamsyndicate-canada.com/'
				 />
				 <CardItem
					src='images/coronavrus.jpg'
					text='Educational augmented reality app showing how long COVID-19 can live on different surfaces. Created at Citizen Hacks.'
					label='CoronaVRus'
					path='https://devpost.com/software/coronavrus'
				 />	  
				 </ul>
			</div>
		 </div>
	  </div>
	);
 }

 export default Cards;