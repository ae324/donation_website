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
    
    function SetPaymentData() {
      var inDate = "02/28/1997"
      var inAmount = 11
      info.push({ date: inDate, amount: inAmount });
      setInfo(() => info.map((item) => item));
      return info;
    }

    useEffect(() => {
        //GetPaymentData();
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
            {/*info.map((item) => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))*/}
          </Table>
        </span>
      </div>
    );
}

export default List;