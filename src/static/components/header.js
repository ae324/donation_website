import React, { useState, useEffect } from "react";
//import { Button } from 'react-bootstrap';

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

  function emitToDB() {
    var inName = document.getElementById("Name").value;
    var inAmount = document.getElementById("Amount").value;
    info.push({ name: inName, amount: inAmount });
    setInfo(() => info.map((item) => item));
    return info;
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nj Homeless</h1>
        <a
          className="App-link"
          href="https://www.paypal.me/lpinj"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button onClick={emitToDB}>
          Donate Today
        </button>
        </a>
      </header>
      <input type="text" id="Name"></input>
      <input type="text" id="Amount"></input>
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
