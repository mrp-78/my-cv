import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  document.title = "CV";
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Background />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
