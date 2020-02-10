import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Welcome from './welcome/welcome';
import Charts  from './charts/charts';
import NormalLoginForm from './login/login';
import RegistrationForm from './login/register';
import UsersList from './users/userslist';
import UsersEdit from './users/usersedit';



function App() {
	return (
		<Router>
		<div className="App">
		<Route path='/welcome' component={Welcome}></Route>
		<Route path='/charts' component={Charts}></Route>
		<Route path='/login' component={NormalLoginForm}></Route>
		<Route path='/registe' component={RegistrationForm}></Route>
		<Route path='/userlist' component={UsersList}></Route>
		<Route path='/useredit' component={UsersEdit}></Route>
		</div>
		</Router>
	);
}

export default App;
