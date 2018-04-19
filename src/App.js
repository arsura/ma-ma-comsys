import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, Logout } from './Login/login';
import Home from './Home/home';
import NavBar from './NavBar/navbar'
import Profile from './Profile/profile';
import Post from './Post/post';
import SignUp from './Signup/signup';
import Poll from './Poll/poll';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/profile/:id' component={Profile} />
          <Route path='/post/:id' component={Post} />
          <Route path='/signup' component={SignUp} />
          <Route path='/poll' component={Poll} />
        </div>
      </Router>
    );
  }
}

export default App;
