import React, { useState } from 'react';
import { Button, Carousel, Alert } from 'react-bootstrap';
//import Carousel from 'react-bootstrap/Carousel'

import logo from '../images/LPI logo (2).jpg';
import slide1 from '../images/126423782_3479745328806741_2831548415582141972_n.jpg';
import slide2 from '../images/NEIL AND LOAD AT JCC NOV 1  2018.jpg';
import slide3 from '../images/slide3.jpg';

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
        <h1>Nj Homeless</h1>
        <h4>We are a 501(c)(3) non-profit corporation on a mission to provide for the  "homeless, profoundly poor & disenfranchised"</h4>
        

        {checkout ? (
          <PayPal name={inName} payAmount={inAmount} date={inDate} />
        ) : (
          <div>
            {show ? (
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                  Name can only consist of spaces and upper and lowercase letters
                </p>
                <p>
                  Donation amount must be an integer rounded to the nearest USD
                </p>
                <p>
                  Neither can be left blank
                </p>
              </Alert>
            ) : (<div></div>)
            }

            <input type="text" id="Name" placeholder="Your Name or N/A"></input>&nbsp;
            <input type="text" id="Amount" placeholder="Donation Amount USD"></input>&nbsp;
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