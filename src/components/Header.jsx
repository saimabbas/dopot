import React, { useState } from "react";
import "../styles/components/header.css";
import { MdMenu, MdClear } from "react-icons/md";
import LogoWhite from "../assets/img/logo-white.svg";
import { Outlet, Link } from "react-router-dom";

import GetAccount from "../utils/ethersUtils.js";


const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [walletText, setwalletText] = useState('Wallet');

  return (
    <header>
      <div className="box">
        {/* Header for PC */}
        <div className="header-content">
          <div className="header-left">
            <img src={LogoWhite} alt="LogoWhite" />
          </div>
          <div className="header-right">
            <a href="#">Home</a>
            <Link to="/insprogetto">InsProgetto</Link>
            <a href="#">Guadagna</a>
            <a href="#">Impara</a>
            <a href="#">Community</a>
            <a href="#">FAQ</a>
            <a href="#">DS Token</a>
            <button className="grd-btn dopot-btn-sm">Account</button>
            <button className="purple-border-btn dopot-btn-sm" onClick={() => GetAccount(setwalletText)}>{walletText}</button>
          </div>
        </div>
        {/* Header for Mobile Devices */}
        <div className="header-mob">
          <img src={LogoWhite} alt="LogoWhite" />
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
              <a href="#">Home</a>
              <a href="insprogetto">Investi</a>
              <a href="#">Guadagna</a>
              <a href="#">Impara</a>
              <a href="#">Community</a>
              <a href="#">FAQ</a>
              <a href="#">DS Token</a>
              <button className="grd-btn dopot-btn-lg">Account</button>
              <button className="purple-border-btn dopot-btn-lg" onClick={GetAccount}>Wallet</button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
