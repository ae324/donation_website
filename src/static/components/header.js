import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

import logo from '../images/LPI logo (2).jpg';
import '../style/App.css';


const Header = ()  => {

  const initialInfo = [
    {
      date: "05/18/1998",
      amount: 10
    }
  ];
  const [info, setInfo] = useState(initialInfo);

  function EmitToDB() {
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
                  {item.date} ${item.amount}
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
