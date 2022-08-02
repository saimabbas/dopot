import React from "react";
import "../styles/components/header.css";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="header-content">
          <a href="#">Home</a>
          <a href="#">Investi</a>
          <a href="#">Guadagna</a>
          <a href="#">Impara</a>
          <a href="#">Community</a>
          <a href="#">FAQ</a>
          <button className="grd-btn">Account</button>
          <button className="grd-btn">Wallet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
