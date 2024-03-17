import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="collection">
          <div className="cart">
            <div className="cart-box">
              <p className="cart-page">New Arrival</p>
              <h1 className="cart-name">Discover Our New Collection</h1>
              <p className="cart-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="cart-btn">BUY Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
