import React from "react";
import { Feature } from "../../Components";
import "./features.css";
import { featuresData } from "./featuresData";
const Features = () => {
  return (
    <div className="gpt3_features section__padding" id="features">
      <div className="gpt3_features-headnings">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p className="gradient__text">Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map(({ title, text }, index) => (
          <Feature text={text} title={title} key={title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
