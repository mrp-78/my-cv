import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Background from "./components/Background";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Background />
    </React.Fragment>
  );
}

export default App;
