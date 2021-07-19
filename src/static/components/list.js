import React, { useState, useRef, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

import '../style/App.css';

const List = (props)  => {

  const initialInfo = [
      {
        date: "05/18/1998",
        amount: 10
      }
    ];
    const [info, setInfo] = useState(initialInfo);

    function GetPaymentData() {
      var inDate = "02/28/1997"
      var inAmount = props.amount
      var inName = props.name
      info.push({ date: inDate, amount: inAmount, name: inName });
      setInfo(() => info.map((item) => item));
      return info;
    }
    return (
      <div className="List">
        <span>
          <Table>
            {info.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>${item.amount}</td>
                <td>${item.name}</td>
              </tr>
            ))}
          </Table>
        </span>
      </div>
    );
}

export default List;
