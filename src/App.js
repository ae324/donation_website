import React from "react";

import Header from "./static/components/header";

function App() {
  return (
    <div>
      <Header />
      <footer className="copyright" style={{textAlign:"center"}}>
          &#169; 2021 Developed & Designer by <a href="https://gamblinflanagan-dc7f7.web.app" target="_blank">Joseph Flanagan</a> & <a href="https://www.allisoneglow.com" target="_blank">Allison Eglow</a>
      </footer>
    </div>
  )
}

export default App;
