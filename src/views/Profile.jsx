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
import ProfileIconGrd1 from "../assets/img/profile-icon-grd-1.png";
import ProfileIconGrd2 from "../assets/img/profile-icon-grd-2.png";
import BlogImg from "../assets/img/void.jpg";
import ProfileCardLeft from "../components/Profile/ProfileCardLeft";
import IconInfoCard from "../components/PaginaCard/IconInfoCard";
import PCDollarIcon from "../assets/img/pc-dollar-icon.png";
import PCUserIcon from "../assets/img/pc-person-icon.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Profile = () => {
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
        <div className="pts-icons-box">
          <div className="pts-icons-card">
            <img src={ProfileIconGrd1} alt="ProfileIconGrd" />
            <p>I miei Investimenti</p>
          </div>
          <div className="pts-icons-card">
            <img src={ProfileIconGrd2} alt="ProfileIconGrd" />
            <p>I miei preferiti</p>
          </div>
        </div>

        <section className="profile-bottom">
          <div className="box">
            <div className="profile-main-grid">
              <div className="pmg-left">
                <ProfileCardLeft img={BlogImg} price="$100">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque asperiores, soluta obcaecati quae unde corrupti?
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                </ProfileCardLeft>
                <ProfileCardLeft img={BlogImg} price="$100">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque asperiores, soluta obcaecati quae unde corrupti?
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                </ProfileCardLeft>
                <ProfileCardLeft img={BlogImg} price="$100">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Itaque asperiores, soluta obcaecati quae unde corrupti?
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                </ProfileCardLeft>
              </div>
              <div className="pmg-right">
                <div className="pmg-right-card">
                  <div className="pmg-rc-left">
                    <h3>Nome del progetto</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vitae porro eius quasi inventore voluptate? Nam libero
                      quas ipsa unde nihil perspiciatis maxime soluta mollitia
                      quae. Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Vitae porro eius quasi inventore voluptate? Nam
                      libero quas ipsa unde nihil perspiciatis maxime soluta
                      mollitia quae.
                      <br />
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Vitae porro eius quasi inventore voluptate? Nam libero
                      quas ipsa unde nihil perspiciatis maxime soluta mollitia
                      quae. Quae quibusdam veritatis architecto ipsam similique
                      asperiores.
                    </p>
                  </div>

                  <div className="pmg-rc-right">
                    <div className="pc-hero-icon-grid">
                      <IconInfoCard
                        img={PCDollarIcon}
                        text="324.211 su 200.00 Draccolti"
                      />
                      <IconInfoCard
                        img={PCUserIcon}
                        text="2304 persone hanno investito"
                      />
                      <IconInfoCard
                        img={PCDollarIcon}
                        text="21 giorni al termine"
                      />
                    </div>
                    <div className="pc-70-box">
                      <p>
                        Investimento <br /> completo al
                      </p>
                      <div className="graph-box">
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          strokeWidth={5}
                        />
                        ;
                      </div>
                    </div>
                  </div>
                  <div className="pmg-btn-box">
                    <button className="grd-btn dopot-btn-lg">
                      Scopri di più
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
