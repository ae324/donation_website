import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./static/components/header";

function App() {
  return (
    <div>
      <Header />
      <Container className="CopyrightContainer">
            <footer className="copyright">
                &#169; 2021 Developed & Designer by <a href="https://gamblinflanagan-dc7f7.web.app" target="_blank">Joseph Flanagan</a> & <a href="https://www.allisoneglow.com" target="_blank">Allison Eglow</a>
            </footer>
        </Container>
    </div>
  )
}

export default App;
