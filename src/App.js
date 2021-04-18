import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from './Components/AddService/AddService';
import AllUsers from './Components/AllUsers/AllUsers/AllUsers';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
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
        <Route path="/appointment">
          <Appointment/>
        </Route>
        <Route path="/dashboard">
          <DashBoard/>
        </Route>
        <Route path="/dashboard/appointments">
          <DashBoard/>
        </Route>
        <Route path="/dashboard/allappointments">
          <AllUsers/>
        </Route>
        <Route path="/addService">
            <AddService/>
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
