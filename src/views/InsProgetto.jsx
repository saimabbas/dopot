import React from "react";
import "../styles/globals.css";
import "../styles/ins-progetto.css";
import ProfileIconArrowLeft from "../assets/img/profile-icon-arrow-left.png";
import PlusGrdIcon from "../assets/img/plus-grd-icon.png";

const InsProgetto = () => {
  return (
    <div className="app">
      <main className="ins-progetto-page">
        <section className="ins-progetto-content">
          <div className="box">
            <div className="ins-head">
              <a href="#">
                <img src={ProfileIconArrowLeft} alt="ProfileIconArrowLeft" />
              </a>
              <h2>Inserisci il tuo progetto </h2>
            </div>
            <div className="ins-progress">
              <div className="ins-circle ins-circle-done">
                <p>Informazioni di base</p>
              </div>
              <div className="ins-line ins-line-done"></div>
              <div className="ins-circle ins-circle-done">
                <p>Questionario</p>
              </div>
              <div className="ins-line ins-line-done"></div>
              <div className="ins-circle ins-circle-active">
                <p>Progetto</p>
              </div>
              <div className="ins-line ins-line-pending"></div>
              <div className="ins-circle ins-circle-pending">
                <p>Prodotto</p>
              </div>
              <div className="ins-line ins-line-pending"></div>
              <div className="ins-circle ins-circle-pending">
                <p>FAQ</p>
              </div>
            </div>
            <div className="ins-input-box">
              <h4>Che tipo di campagna vuoi realizzare?</h4>
              <div className="ins-btn-box">
                <button className="grd-btn dopot-btn-lg">
                  Campagna Reward
                </button>
                <button className="purple-border-btn dopot-btn-lg">
                  Campagna Equity
                </button>
              </div>
              <h6>Non sai quale scegliere?</h6>
            </div>
            <div className="ins-input-box">
              <h4>Che quota vuoi raggiungere?</h4>
              <input type="text" placeholder="inserisci la cifra" />
            </div>
            <div className="ins-input-box">
              <h4>Che tipo di campagna vuoi realizzare?</h4>
              <div className="ins-btn-box">
                <button className="grd-btn dopot-btn-lg">45 giorni</button>
                <button className="grd-btn dopot-btn-lg">65 giorni</button>
                <button className="grd-btn dopot-btn-lg">90 giorni</button>
              </div>
            </div>
            <div className="ins-input-box">
              <h4>Raccontaci del tuo progetto...</h4>
              <input
                type="text"
                placeholder="Com’è nata l’idea, quanti anni fa, aneddoti, etc..."
              />
            </div>
            <div className="ins-input-box">
              <h4>Obiettivo del progetto</h4>
              <input
                type="text"
                placeholder="Perchè le persone dovrebbero aiutarti? Quale scopo raggiungi?"
              />
            </div>
            <div className="ins-input-box">
              <h4>Il team</h4>
              <input
                type="text"
                placeholder="Presenta le persone che lavorano al progetto e il loro background"
              />
            </div>
            <div className="ins-input-box">
              <h4>Roadmap</h4>
              <input type="text" placeholder="inserisci titolo step" />
              <textarea placeholder="descrivi lo step della roadmap" />
              <input type="text" placeholder="inserisci titolo step" />
              <textarea placeholder="descrivi lo step della roadmap" />
            </div>
            <div className="add-btn-box">
              <a href="#">
                <img src={PlusGrdIcon} alt="PlusGrdIcon" />
              </a>
            </div>
            <div className="proceed-btn-box">
              <button className="grd-btn dopot-btn-lg">Procedi</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InsProgetto;
