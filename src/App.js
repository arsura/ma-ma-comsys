import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Logout } from './Login/login';
import Home from './Home/home';
import NavBar from './NavBar/navbar'
import Profile from './Profile/profile';
import { Post } from './Post/post';
import SignUp from './Signup/signup';
import Poll from './Poll/poll';
import CreatePost from './CreatePost/createpost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/post/:id' component={Post} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/poll:id' component={Poll} />
          <Route exact path='/createpost' component={CreatePost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
