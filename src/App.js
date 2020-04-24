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
import ClassList from './class/classlist'
import CommentList from './comment/comment';
import DiscussGroup from './discuss/discuss';

import UserComment from './user_comment/commentadd';
import UserWelcome from './user_comment/welcome';
import ChartRoom from './user_comment/chatroom';



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
                <Route path='/commentlist' component={CommentList}></Route>
                <Route path='/discussgroup' component={DiscussGroup}></Route>

                <Route path='/usercomment' component={UserComment}></Route>
                <Route path='/userwelcome' component={UserWelcome}></Route>
                <Route path='/userchartroom' component={ChartRoom}></Route>
            </div>
        </Router>
    );
}

export default App;
