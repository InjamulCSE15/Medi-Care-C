import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const SimpleCard = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
   
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
       
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div class="mt-3">
            <CardElement />

            </div>
            <button type="submit" class="btn btn-outline-success mt-3" disabled={!stripe}>
                Pay
            </button>
        </form>
        {
            paymentError && <p style={{color: 'red', fontWeight: 'bold'}} class="mt-3">{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green', fontWeight: 'bold'}} class="mt-3">Your payment was successful.</p>
        }
    </div>
  );
};

export default SimpleCard;