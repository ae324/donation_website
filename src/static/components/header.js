import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
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

  const [show, setShow] = useState(false);

  function EmitPayment() {
    var nameInput = document.getElementById("Name").value;
    var amountInput = document.getElementById("Amount").value;
    var dateInput = DateTime();

    var regexNum = /^[1-9][0-9]*$/;
    var regexName = /^([a-z]|[A-Z])(\/|\s|[a-z]|[A-z])*$/;

    if ( amountInput.match(regexNum) && nameInput.match(regexName))
    {
      setInName(nameInput);
      setInAmount(amountInput);
      setInDate(dateInput);
      setCheckout(true);
      return;
    }
    setShow(true);
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color:"darkgreen"}}>Nj Homeless</h1>
        <h4 style={{color:"darkgreen"}}>We are a 501(c)(3) non-profit corporation on a mission to provide for the  "homeless, profoundly poor & disenfranchised"</h4>
        {checkout ? (
          <PayPal name={inName} payAmount={inAmount} date={inDate} />
        ) : (
          <div>
            {show ? (
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p style={{fontSize:"large"}}>
                  Name can only consist of spaces and upper and lowercase letters
                <br/>
                  Donation amount must be an integer rounded to the nearest USD
               <br/>
                  Neither can be left blank
                </p>
              </Alert>
            ) : (<div></div>)
            }

            <input type="text" id="Name" placeholder="Your Name or N/A" className="Input"></input>&nbsp;
            <input type="text" id="Amount" placeholder="Donation Amount USD" className="Input"></input>&nbsp;
            <Button className="App-link" id="Donate" variant="success" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
      </div><br/>
      <h4>Thank You To The People Below For Donating!</h4>
      <List />
    </div>
  );
}

export default Header;
