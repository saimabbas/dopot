import React from "react";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="box">
        <div className="footer-grid">
          <div className="footer-grid-box">
            <h4>Contatti</h4>
            <a href="#">Mail</a>
          </div>

          <div className="footer-grid-box">
            <h4>Servizi</h4>
            <a href="#">Area Developer</a>
            <a href="#">Lancia il tuo progetto</a>
            <a href="#">Learn with Dopot</a>
            <a href="#">Eventi</a>
          </div>
          <div className="footer-grid-box">
            <h4>Community</h4>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="footer-bottom">
          <h6>DOPOT.FI</h6>
          <p>Copyright © 2021 tutti diritti riservati a Dopot.ﬁ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
