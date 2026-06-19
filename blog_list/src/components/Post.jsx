import React from "react";
import "./Post.css";

function Post({ post: { title, body, imgUrl, author } }){
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <img className="image" src={imgUrl} alt={title} />
      <p>{body}</p>
      <div className="info">
        <h4>Written by: {author}</h4>
      </div>
    </div>
  );
};

export default Post;