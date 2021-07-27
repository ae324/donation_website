import React from "react";

import Header from "./static/components/header";

function App() {
  return (
    <div>
      <Header />
      <p className="copyright">
        Copyright 2021
        Developed by <a href="https://gamblinflanagan.herokuapp.com" target="_blank">Joseph Flanagan</a>&nbsp;
        Designed by <a href="https://www.allisoneglow.com" target="_blank">Allsion Eglow</a>
      </p>
    </div>
  )
}

export default App;