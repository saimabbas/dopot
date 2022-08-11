import React from "react";

const IconInfoCard = (props) => {
  return (
    <div className="pc-hero-icon-grid-card">
      <img src={props.img} alt="Icon Info" />
      <p>{props.text}</p>
    </div>
  );
};

export default IconInfoCard;
