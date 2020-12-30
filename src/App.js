import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { About} from "./components/pages/About.js";
import { Contact} from "./components/pages/Contact.js";
import { Error404 } from "./components/pages/Error404.js";
import HomePage from './components/pages/HomePage';

function App() {
	return (
		<div>
		<Routes>
	    	<Route path="/" element={<HomePage />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/*" element={<Error404 />} />
    	</Routes>
		</div>
	)
}

export default App;
