import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import logo from '../images/LPI logo (2).jpg';

import '../style/App.css';
import PayPal from "./paypal";
import List from "./list";


const Header = ()  => {

  const [checkout, setCheckout] = useState(false);

  const [inName, setInName] = useState('');
  const [inAmount, setInAmount] = useState(0);
  const [inDate, setInDate] = useState('');

  function DateTime() {
    var showDate = new Date();
    var addDate = showDate.getMonth()+1+'/'+showDate.getDate()+'/'+showDate.getFullYear();
    return addDate;
  }

  function EmitPayment() {
    var nameInput = document.getElementById("Name").value;
    var amountInput = document.getElementById("Amount").value;
    var dateInput = DateTime();

    var regexNum = /^[1-9][0-9]*$/;
    var regexName = /^([a-z]|[A-Z])([a-z]|[A-z])*$/;

    if ( amountInput.match(regexNum) && nameInput.match(regexName))
    {
      setInName(nameInput);
      setInAmount(amountInput);
      setInDate(dateInput);
      setCheckout(true);
      return;
    }
    console.log("error must be number 0-9");
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the NJ Homeless Donation Site!</h1>
        <h4>We are a 501(c)(3) non-profit corporation on a mission to provide for the  "homeless, profoundly poor & disenfranchised"</h4>
        <p><a href={"www.njhomeless.org"}>Check Out Our Website</a></p>

        {/*<a
          className="App-link"
          href="https://www.paypal.me/njhomeless"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Today
        </a>*/}
        {checkout ? (
          <PayPal name={inName} payAmount={inAmount} date={inDate} />
        ) : (
          <div>
            <input type="text" id="Name" placeholder={"Full Name"}></input>&nbsp;
            <input type="text" id="Amount" placeholder={"Enter Donation Amount"}></input>&nbsp;
            <Button variant="outline-success" className="App-link" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
      </div>
      <br/><h5>Active Donation List</h5>
      <List />
    </div>
  );
}

export default Header;
