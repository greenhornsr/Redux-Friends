import React from 'react';
import './App.css';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import FriendsList from './components/FriendsList';

import { Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <h1>REDUX FRIENDS</h1>
        <section className="navs">
          < NavLink to="/login">Login</NavLink> 
          < NavLink to="/friendslist">Friends</NavLink>
        </section>
        <section className="component-routes">
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/friendslist" component={FriendsList}  />
        </section>
      </div>
    </>
  );
}

export default App;
