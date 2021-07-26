import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button, Table } from 'react-bootstrap';

import '../style/App.css';

const List = ()  => {

   const [info, setInfo] = useState([]);

   async function GetPaymentData() {
        const response = await fetch('https://nj-homeless-donation-website-default-rtdb.firebaseio.com/payments.json');
        const data = await response.json();

        const loadedPayments = [];

        for (const key in data) {
          loadedPayments.push({
                id: key,
                name: data[key].name,
                amount: data[key].amount,
                date: data[key].date,
            });
        }
        
        setInfo(loadedPayments);
        console.log(data);
        console.log("loadedPayments = :\t"+loadedPayments);
        console.log("info = :\t"+info);
    }

    useEffect(() => {
        GetPaymentData();
        const interval = setInterval(() => {
            GetPaymentData();
        }, 5000); //runs every 5000 miliseconds or 5 seconds
        return () => clearInterval(interval);
      }, []);

    return (
      <div className="List">
          {/*<Button onClick={GetPaymentData}>
              GET DATA
            </Button>*/}
        <span>
          <Table>
            {info.map((item) => (
              <tr key={item.key}>
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