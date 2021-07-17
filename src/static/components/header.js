import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import logo from '../images/LPI logo (2).jpg';
import '../style/App.css';
import PayPal from "./paypal";
import List from "./list";


const Header = ()  => {

  const [checkout, setCheckout] = useState(false);
  const [inAmount, setInAmount] = useState(0);
  
  function EmitPayment() {
    var nameInput = document.getElementById("Name").value;
    var amountInput = document.getElementById("Amount").value;
    var regexNum = /^[1-9][0-9]*$/;
    var regexName = /^([a-z]|[A-Z])([a-z]|[A-z])*$/;
    if ( amountInput.match(regexNum) && nameInput.match(regexName))
    {
      setInAmount(amountInput);
      setCheckout(true);
      return;
    }
    console.log("error must be number 0-9");
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nj Homeless</h1>
        {/*<a
          className="App-link"
          href="https://www.paypal.me/lpinj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Today
        </a>*/}
        
        {checkout ? (
          <PayPal amountUSD={inAmount} />
        ) : ( 
          <div>
            <input type="text" id="Name"></input>
            <input type="text" id="Amount"></input>
            <Button className="App-link" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
      </div>
      <List />
    </div>
  );
}

export default Header;
