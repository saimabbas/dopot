import React, { useState } from "react";
import "../styles/dashboard.css";
import "../styles/globals.css";
import Header from "../components/Header";
import "../styles/components/header.css";
import "../styles/components/header.css";
import { MdMenu, MdClear } from "react-icons/md";
import LogoWhite from "../assets/img/logo-white.svg";

const Home = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  return (
    <div className="app">
      <main className="dashboard">
        <div className="dashboard-header">
          <header>
            <div className="box">
              {/* Header for PC */}
              <div className="header-content">
                <div className="header-left">
                  <img src={LogoWhite} alt="LogoWhite" />
                </div>
                <div className="header-right">
                  <a href="#">Home</a>
                  <a href="#">Investi</a>
                  <a href="#">Guadagna</a>
                  <a href="#">Impara</a>
                  <a href="#">Community</a>
                  <a href="#">FAQ</a>
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
                    <a href="#">Investi</a>
                    <a href="#">Guadagna</a>
                    <a href="#">Impara</a>
                    <a href="#">Community</a>
                    <a href="#">FAQ</a>
                  </div>
                ) : null}
              </div>
            </div>
          </header>
        </div>
      </main>
    </div>
  );
};

export default Home;
