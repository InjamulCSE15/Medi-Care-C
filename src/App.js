import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
