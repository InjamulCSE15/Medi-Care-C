import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddService from './Components/AddService/AddService';
import AllUsers from './Components/AllUsers/AllUsers/AllUsers';
import UserReview from './Components/DashBoard/AppointmentsByDate/UserReview/UserReview';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Home/MakeAppointments/Appointment/Appointment';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Payment from './Components/Payment/Payment';

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
        <PrivateRoute path="/dashboard">
          <DashBoard/>
        </PrivateRoute>
        <Route path="/dashboard/appointments">
          <DashBoard/>
        </Route>
        <PrivateRoute path="/dashboard/allappointments">
          <AllUsers/>
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
        <Route path="/addreview">
            <UserReview/>
          </Route>
        <Route path="/payment">
            <Payment/>
          </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
