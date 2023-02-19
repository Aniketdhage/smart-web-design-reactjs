import React from "react";
import "./Brand.css";
import { google, slack, atlassian, shopify, dropbox } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3_brand section__padding">
      <div className="gpt3_brand-content">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={shopify} alt="shopify" />
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brand;
