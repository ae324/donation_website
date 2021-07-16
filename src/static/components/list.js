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
          <table>
            {info.map((item) => (
              <tr key={item.id}>
                  <td>{item.date}</td>
                <td>${item.amount}</td>
              </tr>
            ))}
          </table>
        </span>
      </div>
    );
}

export default List;
