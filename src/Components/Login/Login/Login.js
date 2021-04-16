import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../pictures/login.jpg';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch(function (error) {
            });
    }

    return (
        <div className="login-page container">
            <div className="row d-flex align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group p-2">
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="form-group p-2">
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-outline-danger" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle}/> Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-5 me-2 py-2">
                    <img className="img-fluid" src={LoginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;