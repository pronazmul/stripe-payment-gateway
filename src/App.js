import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SimplePayment from './Components/SimplePayment'
import AdvancePayment from './Components/AdvancePayment'

function App() {
  return (
    <div style={{ height: '100vh' }} className="container d-flex flex-row align-items-center jusfity-content-center">
      <div className="col-md-6">
        <div className="card bg-secondary">
          <div className="card-header text-center card-title">
            <h2>Basic Example</h2>
          </div>
          <div className="card-body px-4">
              <SimplePayment></SimplePayment>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card bg-info">
          <div className="card-header text-center card-title">
            <h2>Dynamic Example</h2>
          </div>
          <div className="card-body">
            {/* <AdvancePayment></AdvancePayment> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
