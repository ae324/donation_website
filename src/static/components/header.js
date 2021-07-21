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
        <h1>NJ Homeless</h1>
        <h4>We are a 501(c)(3) non-profit corporation on a mission to provide for the  "homeless, profoundly poor & disenfranchised"</h4>
        <h5>Instructions for Donating: Write your name in the left box, write the desired donation amount and then Click "Donate"</h5>
        {/*<a
          className="App-link"
          href="https://www.paypal.me/njhomeless"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Today
        </a>*/}

        {checkout ? (
          <PayPal amountUSD={inAmount} />
        ) : (
          <div>
            <input type="text" id="Name"></input>&nbsp;
            <input type="text" id="Amount"></input>&nbsp;
            <Button className="App-link" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
      </div>
      <List />
      {/*<Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
          />
          </Carousel.Item>
      </Carousel>*/}

    </div>
  );
}

export default Header;
