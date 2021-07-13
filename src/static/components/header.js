import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

import logo from '../images/LPI logo (2).jpg';
import '../style/App.css';


const Header = ()  => {

  const initialInfo = [
    {
      name: "name",
      amount: 0
    }
  ];
  const [info, setInfo] = React.useState(initialInfo);

  function EmitToDB() {
    var inName = document.getElementById("Name").value;
    var inAmount = document.getElementById("Amount").value;
    info.push({ name: inName, amount: inAmount });
    setInfo(() => info.map((item) => item));
    ChangePage();
    return info;
  }

  function ChangePage() {
    var inAmount = document.getElementById("Amount").value;

    if (inAmount === /[0-9]+/g) {
      //goto link "https://www.paypal.me/lpinj" fetch
    }
    else {
      //label invalid amount
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nj Homeless</h1>
        <Button className="App-link" onClick={EmitToDB}>
          Donate Today
        </Button>
      </header>
      <div className="List">
        <span>
          <ul>
            {info.map((item) => (
              <li key={item.id}>
                <label>
                  {item.name} $ {item.amount}
                </label>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Header;
