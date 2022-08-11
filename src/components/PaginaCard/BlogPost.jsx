import React from "react";

const BlogPost = (props) => {
  return (
    <div className="blogpost-box">
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
      <img src={props.img} alt="BlogImg" />
    </div>
  );
};

export default BlogPost;
