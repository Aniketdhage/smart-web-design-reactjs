import React from "react";
import { Article, Brand, Navbar, Feature, Cta } from "./Components";
import {
  Blogs,
  Footer,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from "./container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
