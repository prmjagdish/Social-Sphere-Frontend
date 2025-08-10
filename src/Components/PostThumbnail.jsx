import React from "react";
import { Link } from "react-router-dom";


const PostThumbnail = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover hover:opacity-80 transition duration-200"
        />
      </div>
    </Link>
  );
};

export default PostThumbnail;
