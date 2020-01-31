import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Welcome from './welcome/welcome'
import Charts  from './charts/charts'


function App() {
	return (
		<Router>
		<div className="App">
		<Route path='/welcome' component={Welcome}></Route>
		<Route path='/charts' component={Charts}></Route>
		</div>
		</Router>
	);
}

export default App;
