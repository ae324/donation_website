import React, {useState} from 'react';
import {Button, Alert, Container, Card, Col, Row} from 'react-bootstrap';
import logo from '../images/DIAMOND BACK CLUB LPI LOGO MARRIED.jpg';
import '../style/App.css';
import PayPal from "./paypal";
import Image from 'react-bootstrap/Image'
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
        <Container>
            <Row>
                <Col>
                    <h2 style={{textAlign: "center"}}>Nj Homeless & Diamondback Adventure Society <br/>
                        Charity Ride<br/>October 23rd, 2021</h2>

                </Col>
            </Row>
            <Row className="center">
                <Image src={logo}/>
            </Row>
            <Row><br/></Row>

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
            <Row><br/></Row>
            <Row className="center">
                <h4>About The Fundraiser</h4>
                <p>
                <p>
                    On October 23, 2021 our riders will embark on a 300 mile motorcycle journey to create awareness
                    about
                    the homelessness, hunger and the lack of resources for so many families living in our communities.
                    As
                    the winter months approach, our riding day will be dedicated to the need for food, clothing and
                    supplies
                    to support those in need.<br/></p><p>We were shocked to learn of the crushing need for food,
                clothing and
                supplies right in our own backyards. Sure, once we learned more this all made sense, but for those
                unaffected by homelessness and hunger, it was shocking that such a need continues to exist so close to
                home. With the prospect of
                homelessness on the rise, we decided to take action. By way of a donation, we hope our friends, family
                and colleagues will join us on this journey to make life better for as many people as we can.<br/></p>
                <p>We have all heard of the cold winter, lack of clothing, supplies and food that plagued Washington’s
                    army at Valley Forge. As winter approaches, we chose a ride to Valley Forge to show how little has
                    changed for those in need.<br/>
                </p>
                <p>During the winter of 1777 to 1778, Washington camped with his troops
                at Valley Forge, PA. We have all heard of the suffering at Valley Forge and images of soldiers huddled around lonely campfires and
                Washington on his knees praying that his army might survive often come to mind when people hear the
                words "Valley Forge."<br/>
                </p>
                <p>As the army marched into Valley Forge Washington hoped that his
                officers and soldiers would surmount the troubles that lay ahead of them. While Washington knew most of his men were fit for duty, he calculated
                that at least a third of them had no shoes, did not have a decent coat to protect against the constant
                rain that plagued the camp and the lack of proper clothing and food was a significant problem.
                Washington’s quartermaster reported that they had just twenty-five barrels of flour and only a little
                salt pork to feed the entire army.<br/>
                </p>
                <p>Washington wrote to the Continental Congress and
                explained, unless something was done quickly, "this Army might dissolve" and the war with the British would be lost. With the commitment of the Continental
                Congress and a new Quartermaster General, an efficient operation was created for bringing supplies into
                the camp.<br/>
                </p>
                <p>Finally, on June 19, 1778 the Continental Army, better fed and clothed and more
                determined than ever, marched out of Valley Forge and headed for New Jersey where they would make a stand against the British
                army.<br/>
                </p>
                <p>Washington won his battle against hunger, but our community battle continues. This
                history of Valley Forge is a lesson about how one’s future is never without hope. There is always an opportunity
                for change with food, proper clothing and supplies. With positive action the future of those in need can be
                improved and changed for the better. Diamondback Adventure Society is humbled to work with our chosen
                charity knowing that with our help they will bring local and immediate change to so many people.
                <br/></p>
                <p>We are looking for everyone involved to bring all their social media, friends and family
                along so we can meet our fundraising goal. Please re-post and share your generosity with others so they can get
                involved.<br/>
                </p>
                <p>To find out more about our charity ride, please email Ira Sessler directly at
                diamondbackadventuresociety@gmail.com</p>
                </p>
            </Row>
            <List />
        </Container>
    );
}
export default Header;
