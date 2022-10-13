import React from "react";
import "../styles/components/footer.css";

const BADGE_ID = 'fb48ca1409e7f6fe';
let ALCHEMY_URL = `https://alchemyapi.io/?r=badge:${BADGE_ID}`;
const ALCHEMY_ANALYTICS_URL = `https://analytics.alchemyapi.io/analytics`

function logBadgeClick() {
	    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-click`, {
    method: 'POST',
	    	headers: {
	        	'Content-Type': 'application/json',
	      	},
		    body: JSON.stringify({
			    badge_id: BADGE_ID,
    }),
  });
	    window.open(ALCHEMY_URL, '_blank').focus();
}

function logBadgeView() {
	    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-view`, {
    method: 'POST',
	    	headers: {
	        	'Content-Type': 'application/json',
	      	},
		    body: JSON.stringify({
			    badge_id: BADGE_ID,
    }),
  });
}

function isBadgeInViewpoint(bounding) {
	    return (
	        bounding.top >= 0
	        && bounding.left >= 0
	        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
	        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
}

var intervalId = setInterval(() => {
  const badge = document.getElementById('badge-button');
  if (badge && isBadgeInViewpoint(badge.getBoundingClientRect())) {
    logBadgeView();
    clearInterval(intervalId);
  }
}, 2000);


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
	<a href="#">
    		<img onClick={logBadgeClick} id="badge-button" style={{width:"240px",height:"53px",marginBottom:"2rem"}} src="https://static.alchemyapi.io/images/marketing/badge.png" alt="Alchemy Supercharged" />
	</a>
          <h6>DOPOT.FI</h6>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
