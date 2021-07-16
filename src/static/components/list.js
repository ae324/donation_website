import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import '../style/App.css';

const List = ()  => {
  
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
    );
}
    
export default List;