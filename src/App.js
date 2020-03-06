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
import ClassEdit from './class/classedit'
import ClassList from './class/classdetail'
import UserWelcome from './user_comment/welcome';
import CommentList from './comment/comment';



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
                <Route path='/classadd' component={ClassEdit}></Route>
                <Route path='/classdetail' component={ClassList}></Route>
                <Route path='/usercomment' component={UserWelcome}></Route>
                <Route path='/commentlist' component={CommentList}></Route>
            </div>
        </Router>
    );
}

export default App;
