import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

import logo from '../images/LPI logo (2).jpg';
import slide1 from '../images/126423782_3479745328806741_2831548415582141972_n.jpg';
import slide2 from '../images/NEIL AND LOAD AT JCC NOV 1  2018.jpg';
import slide3 from '../images/slide3.jpg';

import '../style/App.css';
import PayPal from "./paypal";
import List from "./list";


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

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nj Homeless</h1>
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
          <PayPal amountUSD={inAmount} />
        ) : (
          <div>
            <input type="text" id="Amount"></input>&nbsp;
            <Button className="App-link" onClick={EmitPayment}>
              Donate Today
            </Button>
          </div>
        )}
      </div>
      <List />

      <p>
        About NJ Homeless<br>

      </p>
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
