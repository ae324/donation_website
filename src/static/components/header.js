import React, {useState} from 'react';
import {Button, Alert, Container, Card, Col, Row} from 'react-bootstrap';
import '../style/App.css';
import PayPal from "./paypal";
import List from "./list";


const Header = () => {

    const [checkout, setCheckout] = useState(false);

    const [inName, setInName] = useState('');
    const [inAmount, setInAmount] = useState(0);
    const [inDate, setInDate] = useState('');

    function DateTime() {
        var showDate = new Date();
        var addDate = showDate.getMonth() + 1 + '/' + showDate.getDate() + '/' + showDate.getFullYear();
        return addDate;
    }

    const [show, setShow] = useState(false);

    function EmitPayment() {
        var nameInput = document.getElementById("Name").value;
        var amountInput = document.getElementById("Amount").value;
        var dateInput = DateTime();

        var regexNum = /^[1-9][0-9]*(.00)?$/;
        var regexName = /^([a-z]|[A-Z])(\/|\s|[a-z]|[A-z])*$/;

        if (amountInput.match(regexNum) && nameInput.match(regexName)) {
            setInName(nameInput);
            amountInput = amountInput / 1;
            setInAmount(amountInput);
            //console.log("amountInput=:\t"+amountInput);
            setInDate(dateInput);
            setCheckout(true);
            return;
        }
        setShow(true);
    }

    return (
        <div>
            <Container className="Main">
                <Row>
                    <Col>
                        <h2 style={{textAlign: "center"}}><br></br>NJ Homeless Willow Lake Camp Donation Event</h2>

                    </Col>
                </Row>
            
                <Row className="center">
                    {checkout ? (
                        <PayPal name={inName} payAmount={inAmount} date={inDate}/>
                    ) : (
                        <div>
                            {show ? (
                                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                    <p style={{fontSize: "large"}}>
                                        Name can only consist of spaces and upper and lowercase letters (John Doe)
                                        <br/>
                                        Donation amount must be an integer rounded to the nearest USD (20 or 20.00)
                                        <br/>
                                        Neither can be left blank
                                    </p>
                                </Alert>
                            ) : (<div></div>)
                            }
                            <Row className="InputContainer">
                                <input style={{fontSize: "medium"}} type="text" id="Name" placeholder="Your Name or N/A"
                                    className="Input">

                                </input>&nbsp;
                                <input style={{fontSize: "medium"}} type="text" id="Amount"
                                    placeholder="Donation Amount USD"
                                    className="Input">
                                </input>&nbsp;
                                <br/>
                                <Button className="App-link" id="Donate" variant="success" onClick={EmitPayment}>
                                    Donate Today
                                </Button>&nbsp;
                            </Row>
                        </div>
                    )}
                </Row>

            </Container>
            <div className="ScrollContainer">
                <Container className="Scroll">
                    <Row >
                        <Col md>
                            <List />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Header;
