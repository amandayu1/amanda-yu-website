import React from 'react';
import { CardItem } from './Card';
import './styles/Cards.css';

function Cards() {
	return (
		<div className='cards' id="projects">
			<h1>Check out my projects</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<h2>Development</h2>
					<ul className='cards__items'>
						<CardItem
							src='images/splitpeas.png'
							text='React Native & Firebase mobile app allowing groups to split grocery bills when shopping.'
							label='Split Peas'
							path='https://github.com/traopand/split-peas'
						/>
						<CardItem
							src='images/prep.png'
							text='Website for non-profit youth organization, developed and designed entirely by myself.'
							label='PREPosition'
							path='https://github.com/amandayu1/PREPosition-website'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/waterloo.png'
							text='Website for incoming and current UWaterloo students, gained over 32k impressions.'
							label='Waterloo Basics'
							path='http://waterloobasics.com/'
						/>
						<CardItem
							src='images/v2t.png'
							text='Visually/ auditorily impaired users can chat by converting messages from text to speech and speech to text, used the Firebase database.'
							label='Visual Speech'
							path='https://github.com/jerryxu99/VisualSpeech'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/healthtech.png'
							text='Finds nearest hospitals around you using Google Maps API and Facebook chat bot API.'
							label='Health Tech'
							path='https://github.com/amandayu1/hospital-locations'
						/>
						<CardItem
							src='images/chatty.png'
							text='Live chat room built using React, Firebase Realtime Database, and Firebase authentication for sign up/ login.'
							label='Chatty'
							path='https://github.com/amandayu1/real-time-chat-app'
						/>
						<CardItem
							src='images/portfolio.png'
							text='My personal portfolio website, created using React, deployed with Heroku.'
							label='Personal Website'
							path='https://github.com/amandayu1/amanda-yu-website'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/nyan.png'
							text='OOP based collision game, created with JavaScript.'
							label='Avoid Nyan Cat'
							path='https://github.com/amandayu1/avoid-collision-game'
						/>
						<CardItem
							src='images/smartCart.png'
							text='A grocery app on mobile used to scan items and add it to your shopping list, created using React Native.'
							label='SmartCart'
							path='https://github.com/amandayu1/smart-cart/tree/master'
						/>
						<CardItem
							src='images/unzucc.png'
							text='Anti-facial detection neural network. Created at Citizen Hacks.'
							label='Unzucc.me'
							path='https://github.com/amandayu1/unzucc.me'
						/>
					</ul>
					{/*Design Category*/}
					<h2>Design</h2>
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
