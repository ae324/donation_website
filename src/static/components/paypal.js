import React, { useState, useRef, useEffect } from 'react';

import '../style/App.css';


const PayPal = (props)  => {

    const donationAmount = props.amountUSD;
    console.log(donationAmount);

    const paypal = useRef();

    useEffect(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions, err) => {
              return actions.order.create({
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