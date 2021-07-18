import React, { useState, useRef, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

import '../style/App.css';

const List = ()  => {

    const [info, setInfo] = useState([]);

    function GetPaymentData() {
        fetch('https://nj-homeless-donation-website-default-rtdb.firebaseio.com/payments.json')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            const transformedPayments = data.map(payments => {
                return {
                    name: payments.name,
                    amount: payments.amount,
                    date: payments.date,
                };
            });
            setInfo(transformedPayments);
            console.log(info);
            //console.log(data);
        });
    }
    
    function SetPaymentData() {
      var inDate = "02/28/1997"
      var inAmount = 11
      info.push({ date: inDate, amount: inAmount });
      setInfo(() => info.map((item) => item));
      return info;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            //GetPaymentData();
        }, 3000); //runs every 3000 miliseconds or 3 seconds
        return () => clearInterval(interval);
      }, []);

    return (
      <div className="List">
          <Button onClick={GetPaymentData}>
              GET DATA
          </Button>
        <span>
          <Table>
            {info.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.amount}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </Table>
        </span>
      </div>
    );
}

export default List;
