import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SideBar from '../DashBoard/SideBar/SideBar';
import SimpleCard from './SimpleCard';

const stripePromise = loadStripe('pk_test_51HZNkQBEspuFA8V0SJHuv7yto9ESLRDjC4nh8hJyPhFQJMFjG7zCwnadzx0GcsYnY0BJHetUlxz3e7EspZuIkuvQ00uENxpGaP');

const Payment = ({ handlePayment }) => {
    return (
        <div class="d-flex">
            <SideBar />
            <div class="container ms-5">

            <Elements stripe={stripePromise}>
                <SimpleCard handlePayment={handlePayment} />
            </Elements>
            </div>

        </div>
    );
};

export default Payment;