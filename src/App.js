import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SimplePayment from './Components/SimplePayment'
import AdvancePayment from './Components/AdvancePayment'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51HZfdlI49aBYccjolnQDj9POwpCmjFAzfHEZ0TP14kE3ngeqIDmABLG4UdQET5F6PjYZmJRlTixRJ8T6ziwUOV9900hk832hJH');

function App() {
  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-row align-items-center jusfity-content-center">
      <div className="col-md-6">
        <div className="card rounded shadow-lg">
          <div className="card-header text-center card-title">
            <h2>Basic Example</h2>
          </div>
          <div className="card-body px-4">
            <SimplePayment></SimplePayment>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card rounded shadow-lg">
          <div className="card-header text-center card-title">
            <h2>Dynamic Example</h2>
          </div>
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <AdvancePayment></AdvancePayment>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
