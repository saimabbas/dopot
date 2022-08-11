import React from "react";

const InvestiCard = (props) => {
  return (
    <div className="investi-card">
      <img src={props.img} alt="BlogImg" />
      <div className="investi-card-box">
        {props.children}
        <button className="grd-btn dopot-btn-sm">Investi</button>
      </div>
    </div>
  );
};

export default InvestiCard;
