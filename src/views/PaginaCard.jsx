import React from "react";
import "../styles/globals.css";
import "../styles/paginacard.css";
import PaginaCardHero from "../assets/img/pc-hero-img.png";
import PCDollarIcon from "../assets/img/pc-dollar-icon.png";
import PCUserIcon from "../assets/img/pc-person-icon.png";
import PCCalendarIcon from "../assets/img/pc-calendar-icon.png";
import PC70 from "../assets/img/pc-70.png";
import IconPlane from "../assets/img/icon-plane.svg";
import IconHeart from "../assets/img/pc-heart-icon-02.svg";
import ImageIcon from "../assets/img/pc-img-icon.png";
import BlogImg from "../assets/img/void.jpg";
import IconInfoCard from "../components/PaginaCard/IconInfoCard";
import BlogPost from "../components/PaginaCard/BlogPost";
import InvestiCard from "../components/PaginaCard/InvestiCard";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PaginaCard = () => {
  const percentage = 90;
  return (
    <div className="app">
      <main className="pagina-card">
        <section className="pc-hero-section">
          <img
            className="pagina-card-hero-img"
            src={PaginaCardHero}
            alt="PaginaCardHero"
          />
          <div className="box">
            <img className="image-icon" src={ImageIcon} alt="ImageIcon" />
            <div className="pc-hero-grid">
              <div className="pc-hero-grid-left">
                <h1>Nome del progetto</h1>
                <p>
                  Testo introduttivo sul progetto, cosa fa e quali problemi
                  risolve, questo testo serve a riempire lo spazio necessario a
                  scrivere questo testo. Testo introduttivo sul progetto, cosa
                  fa e quali problemi risolve, questo testo serve a riempire lo
                  spazio necessario a <br /> scrivere questo testo Testo
                  introduttivo sul progetto, cosa fa e quali problemi risolve,
                  questo testo serve a riempire lo <br /> spazio necessario a
                  scrivere questo testo. Testo introduttivo sul progetto, cosa
                  fa e quali problemi risolve, questo testo serve a riempire lo
                  spazio necessario a scrivere questo testo
                </p>
                <div className="pc-btn-box">
                  <button className="grd-btn dopot-btn-lg">
                    <img src={IconHeart} alt="IconPlane" /> Salva
                  </button>
                  <button className="grd-btn dopot-btn-lg">
                    <img src={IconPlane} alt="IconPlane" /> Scopri di più
                  </button>
                </div>
              </div>
              <div className="pc-hero-grid-right">
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
            </div>
          </div>
        </section>
        <section className="anchor-links-box">
          <div className="box">
            <div className="alb-content">
              <a href="#" className="pc-active-link">
                Campagna
              </a>
              <a href="#">Roadmap</a>
              <a href="#">Reward</a>
              <a href="#">Community</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </section>
        <section className="pc-main-content">
          <div className="box">
            <div className="pc-content-grid">
              <div className="pc-content-grid-left">
                <BlogPost
                  heading="Introduzione"
                  text="Testo introduttivo sul progetto, cosa fa e quali problemi
                risolve, questo testo serve a riempire lo spazio necessario
                a scrivere questo testo per questa sezione della pagina
                corrente
                Testo introduttivo sul progetto, cosa fa e quali problemi
                risolve, questo testo serve a riempire lo spazio necessario
                a scrivere questo testo per questa sezione della pagina
                corrente Testo introduttivo sul progetto, cosa fa e quali
                problemi risolve, questo testo serve a riempire lo spazio
                necessario a scrivere questo testo per questa sezione della
                pagina corrente Testo introduttivo sul progetto, cosa fa e
                quali problemi risolve, questo testo serve a riempire lo
                spazio necessario a scrivere questo testo per questa sezione
                della pagina corrente Testo introduttivo sul progetto, cosa
                fa e quali problemi risolve, questo testo serve a riempire
                lo spazio necessario a scrivere questo testo per questa
                sezione della pagina corrente."
                  img={BlogImg}
                />
                <BlogPost
                  heading="Storia"
                  text="Testo introduttivo sul progetto, cosa fa e quali problemi
                  risolve, questo testo serve a riempire lo spazio necessario
                  a scrivere questo testo per questa sezione della pagina
                  corrente
                  Testo introduttivo sul progetto, cosa fa e quali problemi
                  risolve, questo testo serve a riempire lo spazio necessario
                  a scrivere questo testo per questa sezione della pagina
                  corrente Testo introduttivo sul progetto, cosa fa e quali
                  problemi risolve, questo testo serve a riempire lo spazio
                  necessario a scrivere questo testo per questa sezione della
                  pagina corrente Testo introduttivo sul progetto, cosa fa e
                  quali problemi risolve, questo testo serve a riempire lo
                  spazio necessario a scrivere questo testo per questa sezione
                  della pagina corrente Testo introduttivo sul progetto, cosa
                  fa e quali problemi risolve, questo testo serve a riempire
                  lo spazio necessario a scrivere questo testo per questa
                  sezione della pagina corrente."
                  img={BlogImg}
                />
                <BlogPost
                  heading="Vison"
                  text="Testo introduttivo sul progetto, cosa fa e quali problemi
                    risolve, questo testo serve a riempire lo spazio necessario
                    a scrivere questo testo per questa sezione della pagina
                    corrente
                    Testo introduttivo sul progetto, cosa fa e quali problemi
                    risolve, questo testo serve a riempire lo spazio necessario
                    a scrivere questo testo per questa sezione della pagina
                    corrente Testo introduttivo sul progetto, cosa fa e quali
                    problemi risolve, questo testo serve a riempire lo spazio
                    necessario a scrivere questo testo per questa sezione della
                    pagina corrente Testo introduttivo sul progetto, cosa fa e
                    quali problemi risolve, questo testo serve a riempire lo
                    spazio necessario a scrivere questo testo per questa sezione
                    della pagina corrente Testo introduttivo sul progetto, cosa
                    fa e quali problemi risolve, questo testo serve a riempire
                    lo spazio necessario a scrivere questo testo per questa
                    sezione della pagina corrente."
                  img={BlogImg}
                />
              </div>
              <div className="pc-content-grid-right">
                <div className="basic-info-box">
                  <img src={ImageIcon} alt="ImageIcon" />
                  <h3>Namo Startup</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    aut cumque perferendis delectus, minus, tempora aliquid
                    exercitationem nemo expedita repudiandae perspiciatis est!
                  </p>
                </div>
                <h5>Investi</h5>
                <InvestiCard img={BlogImg}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint dicta fugit sapiente minus fuga distinctio!
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                  <h5>$100</h5>
                </InvestiCard>
                <InvestiCard img={BlogImg}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint dicta fugit sapiente minus fuga distinctio!
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                  <h5>$100</h5>
                </InvestiCard>
                <InvestiCard img={BlogImg}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint dicta fugit sapiente minus fuga distinctio!
                  </p>
                  <br />
                  <p>- Feature 1</p>
                  <p>- Feature 2</p>
                  <p>- Feature 3</p>
                  <h5>$100</h5>
                </InvestiCard>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaginaCard;
