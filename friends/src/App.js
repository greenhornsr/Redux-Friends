import React from 'react';
import './App.css';
import Login from "./components/Login"

import { Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        < NavLink to="/login">Login</NavLink>
        <p>REDUX FRIENDS</p>
      </div>

      <Route path="/login" component={Login} />
      </>
  );
}

export default App;
