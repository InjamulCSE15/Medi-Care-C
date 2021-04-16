import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Home/MakeAppointments/Appointment/Appointment';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
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
        <PrivateRoute path="/appointment">
          <Appointment/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
