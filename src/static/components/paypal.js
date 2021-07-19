import React, { useState, useRef, useEffect } from 'react';

import '../style/App.css';


const PayPal = (props)  => {

    const donatorName = props.name;
    const donationAmount = props.payAmount;
    const donationDate = props.date;
    
    const payment = {
      name: donatorName, 
      amount: donationAmount, 
      date: donationDate,
    };

    async function EmitToDB() {
      //console.log("payment = :\t"+payment);
      const response = await fetch('https://nj-homeless-donation-website-default-rtdb.firebaseio.com/payments.json', {
        method: 'POST',
        body: JSON.stringify(payment),
        //headers not required for firebase
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    }
    
    
    const paypal = useRef();

    useEffect(() => {
      //var action = $.post('/set-express-checkout');  
      //NOSHIPPING=1
      window.paypal
          .Buttons({
            createOrder: (data, actions, err) => {
              return actions.order.create({
                application_context: {
                  shipping_preference: 'NO_SHIPPING'
                },
                intent: "CAPTURE",
                purchase_units: [
                  {
                    description: "Donation",
                    amount: {
                      currency_code: "USD",
                      value: donationAmount,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
              EmitToDB();
            },
            onError: (err) => {
              console.log(err);
            },
          })
          .render(paypal.current);
      }, []);

    return (
        <div ref={paypal}></div>
    );
}

export default PayPal;