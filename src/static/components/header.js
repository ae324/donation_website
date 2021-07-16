import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import logo from '../images/LPI logo (2).jpg';
import '../style/App.css';
import PayPal from "./paypal";


const Header = ()  => {

  const [checkout, setCheckout] = useState(false);
  const [inAmount, setInAmount] = useState(0);
  
  function EmitPayment() {
    var input = document.getElementById("Amount").value;
    var regex = /^[1-9][0-9]*$/;
    if (input.match(regex))
    {
      setInAmount(input);
      setCheckout(true);
      return;
    }
    console.log("error must be number 0-9");
  }
  
  
  
  const initialInfo = [
    {
      date: "05/18/1998",
      amount: 10
    }
  ];
  const [info, setInfo] = useState(initialInfo);

  function GetPaymentData() {
    var inDate = "02/28/1997" 
    var inAmount = 11
    info.push({ date: inDate, amount: inAmount });
    setInfo(() => info.map((item) => item));
    return info;
  }

  return (
    <div className="App">
      <header className="App-header">
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
            <input type="text" id="Amount"></input>
            <Button className="App-link" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
  
      </header>
      {/*
      <div className="List">
        <span>
          <ul>
            {info.map((item) => (
              <li key={item.id}>
                <label>
                  {item.date} ${item.amount}
                </label>
              </li>
            ))}
          </ul>
        </span>
      </div>
      */}
    </div>
  );
}

export default Header;
