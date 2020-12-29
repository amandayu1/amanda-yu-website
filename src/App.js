import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Contact, Error404 } from "./components/Pages";
import Navbar from "./components/Navbar";



function App() {
	return (
		<div>
		<Routes>
	    	<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
    	</Routes>
		</div>
	)
}

export default App;
