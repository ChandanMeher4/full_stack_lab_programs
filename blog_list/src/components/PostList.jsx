import React from "react";
import Post from "./Post";
import blogPosts from "../data/blogPosts";

function PostList(){
  return (
    <div className="posts-container">
      {blogPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;