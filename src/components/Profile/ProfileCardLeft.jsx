import React from "react";

const ProfileCardLeft = (props) => {
  return (
    <div className="pmg-left-card">
      <img src={props.img} alt="BlogImg" />
      <div>
        {props.children}
        <h5>{props.price}</h5>
      </div>
    </div>
  );
};

export default ProfileCardLeft;
