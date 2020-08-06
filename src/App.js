import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Background from "./components/Background";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
const TITLE = "CV";
function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <Home />
      <Background />
      <Skills />
      <Projects />
    </React.Fragment>
  );
}

export default App;
