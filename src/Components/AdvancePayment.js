import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const AdvancePayment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
     
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
        setPaymentError(error.message)
        setPaymentSuccess(false)        
    } else {
      setPaymentSuccess(true)
      setPaymentError(false)
    }
  };

  return (
      <>
            <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='btn btn-success mt-3' type="submit" disabled={!stripe}>
                Pay Now
            </button>
            </form>
            {paymentError&& <p className='alert alert-danger mt-2'>{paymentError}</p>}
            {paymentSuccess&& <p className='alert alert-success mt-2'>Your Payment is Successfull</p>}
    </>
  );
};

export default AdvancePayment;