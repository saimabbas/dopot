import React from "react";
import "../styles/globals.css";
import "../styles/paginacard.css";
import "../styles/profile.css";
import ProfileHero from "../assets/img/pc-hero-img.png";
import ProfileIconArrowLeft from "../assets/img/profile-icon-arrow-left.png";
import ProfileImg from "../assets/img/profile-img.png";
import ProfileIcon1 from "../assets/img/profile-icon-1.png";
import ProfileIcon2 from "../assets/img/profile-icon-2.png";
import ProfileIcon3 from "../assets/img/profile-icon-3.png";
import ProfileIcon4 from "../assets/img/profile-icon-4.png";
import SwapImg from "../assets/img/swap-img.png";
import SwapDownArrow from "../assets/img/swap-down-arrow.png";
import SwapBtn from "../assets/img/swap-btn.png";
import "react-circular-progressbar/dist/styles.css";
import { MdKeyboardArrowDown } from "react-icons/md";
const Swap = () => {
  const percentage = 65;
  return (
    <div className="app">
      <main className="profile-page">
        <section className="profile-top-section">
          <img className="profile-hero" src={ProfileHero} alt="ProfileHero" />
          <div className="box">
            <div className="pts-content">
              <div className="pts-left">
                <a href="#">
                  <img src={ProfileIconArrowLeft} alt="ProfileIconArrowLeft" />
                </a>
                <div className="profile-img-box">
                  <h3>Profilo di Tommaso</h3>
                  <img src={ProfileImg} alt="ProfileImg" />
                </div>
              </div>
              <div className="pts-right">
                <div className="pts-right-grid">
                  <div className="pts-right-grid-card">
                    <img src={ProfileIcon1} alt="ProfileIcon" />
                    <p>Panoramica</p>
                  </div>
                  <div className="pts-right-grid-card">
                    <img src={ProfileIcon2} alt="ProfileIcon" />
                    <p>Crea Campagna</p>
                  </div>
                  <div className="pts-right-grid-card">
                    <img src={ProfileIcon3} alt="ProfileIcon" />
                    <p>I Miei NFT</p>
                  </div>
                  <div className="pts-right-grid-card">
                    <img src={ProfileIcon4} alt="ProfileIcon" />
                    <p>I Miei Progetti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="swap-section">
          <div className="box">
            <div className="swap-btns-box">
              <button className="purple-border-btn dopot-btn-lg">Equity</button>
              <button className="grd-btn dopot-btn-lg">Reward</button>
            </div>
            <div className="swap-container">
              <div className="swap-heading">
                <h3>Swap</h3>
                <img src={SwapImg} alt="SwapImg" />
              </div>
              <div className="swap-inputs-box">
                <div className="swap-input-box">
                  <input type="text" />
                  <button>
                    <span>DAI</span> <MdKeyboardArrowDown />
                  </button>
                </div>
                <img
                  className="swap-down-arrow"
                  src={SwapDownArrow}
                  alt="SwapDownArrow"
                />
                <div className="swap-input-box">
                  <input type="text" />
                  <button>
                    <span>Select NFT</span> <MdKeyboardArrowDown />
                  </button>
                </div>
              </div>
              <div className="swap-btn-box">
                <button className="swap-btn">
                  <img src={SwapBtn} alt="SWAP" />
                  <span>SWAP</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Swap;
