import React, { useState } from "react";
import "../styles/components/header.css";
import { MdMenu, MdClear } from "react-icons/md";
import LogoWhite from "../assets/img/logo-white.svg";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  return (
    <header>
      <div className="box">
        {/* Header for PC */}
        <div className="header-content">
          <a href="#">Home</a>
          <a href="#">Investi</a>
          <a href="#">Guadagna</a>
          <a href="#">Impara</a>
          <a href="#">Community</a>
          <a href="#">FAQ</a>
          <a href="#">Dopot Token (DPT)</a>
          <button className="grd-btn">Account</button>
          <button className="grd-btn">Wallet</button>
        </div>
        {/* Header for Mobile Devices */}
        <div className="header-mob">
          {isHeaderOpen ? (
            <div
              className="header-icon"
              onClick={() => {
                setIsHeaderOpen(false);
              }}
            >
              <MdClear />
            </div>
          ) : (
            <div
              className="header-icon"
              onClick={() => {
                setIsHeaderOpen(true);
              }}
            >
              <MdMenu />
            </div>
          )}
          {isHeaderOpen ? (
            <div className="header-mob-box">
              <img src={LogoWhite} alt="LogoWhite" />
              <a href="#">Home</a>
              <a href="#">Investi</a>
              <a href="#">Guadagna</a>
              <a href="#">Impara</a>
              <a href="#">Community</a>
              <a href="#">FAQ</a>
              <a href="#">Dopot Token (DPT)</a>
              <button className="grd-btn">Account</button>
              <button className="grd-btn">Wallet</button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
