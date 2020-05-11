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
import CommentCheck from './comment/checkcomment';
import DiscussGroup from './discuss/discuss';

import UserComment from './user_comment/commentadd';
import UserWelcome from './user_comment/welcome';
import ChartRoom from './user_comment/chatroom';
import UserDiscussGroup from './user_comment/discuss';
import DiscussChatRoomUser from './user_comment/discusschatroom';

import ChartRoomAdmin from './discuss/chatroom';
import DiscussChartRoomAdmin from './discuss/discusschatroom';



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
                <Route path='/commentcheck' component={CommentCheck}></Route>
                <Route path='/discussgroup' component={DiscussGroup}></Route>

                <Route path='/discussgruopmsg/:name' component={DiscussChartRoomAdmin}></Route>
                <Route path='/discussgruopmsguser/:name' component={DiscussChatRoomUser}></Route>

                <Route path='/usercomment' component={UserComment}></Route>
                <Route path='/userwelcome' component={UserWelcome}></Route>
                <Route path='/userchartroom' component={ChartRoom}></Route>
                <Route path='/userchartroomadmin' component={ChartRoomAdmin}></Route>
                <Route path='/userdiscuss' component={UserDiscussGroup}></Route>
            </div>
        </Router>
    );
}

export default App;
