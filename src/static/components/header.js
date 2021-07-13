import React from "react";
import logo from '../images/LPI logo (2).jpg';
import '../style/App.css';

const Header = ()  => {
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
          Donate Today
        </a>
      </header>
    </div>
  );
}

export default Header;
