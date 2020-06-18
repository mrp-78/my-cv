import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Background from "./components/Background";
import Skills from "./components/Skills";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Background />
      <Skills />
    </React.Fragment>
  );
}

export default App;
