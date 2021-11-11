import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Polls from './components/Polls';
import Home from './components/Home';


function App() {
		return (
			<>
			<Router>
				<Header/>
				<Routes>
					<Route path='/' element ={<Home/>}/>
					<Route path='/poll' element ={<Polls/>}/>
				</Routes>
			</Router>

		  </>
		)
};

export default App;
