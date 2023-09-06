import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Expertise from "./components/Experties/Expertise";
import Works from "./components/Works/Works";
import css from "./styles/app.module.scss";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Expertise />
      <Works />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
