import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import '../style/App.css';


const List = ()  => {

  const [info, setInfo] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyD0lYPJNup3fkj_UhbAygW4K-rybFdwj9Q",
    authDomain: "nj-homeless-donation-website.firebaseapp.com",
    databaseURL: "https://nj-homeless-donation-website-default-rtdb.firebaseio.com",
    projectId: "nj-homeless-donation-website",
    storageBucket: "nj-homeless-donation-website.appspot.com",
    messagingSenderId: "493996706818",
    appId: "1:493996706818:web:fc4eb85a590f5723246b1b",
    measurementId: "G-J2PYH942NE"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
      firebase.app(); // if already initialized, use that one
  }

  //var database = firebase.database();

   async function GetPaymentData() {
        const response = await fetch('https://nj-homeless-donation-website-default-rtdb.firebaseio.com/newPayments2.json');
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
        <h4>Thank You To The People Below For Donating!</h4>

          <div>
        <span>
          <Table id="donationTable">
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
      </div>
    );
}

export default List;
