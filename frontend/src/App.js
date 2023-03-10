import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
