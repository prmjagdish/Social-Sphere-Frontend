// src/Components/PostCard.jsx
import React from "react";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";


const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow hover:shadow-lg transition duration-300 ">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img
            src={post.avatarUrl}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-200">{post.username}</p>
            {/* <p className="text-xs text-gray-400">{post.username}</p> */}
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-300 text-xl">⋯</button>
      </div>

      {/* Content */}
      <div className="p-4">
        <img
          src={post.imageUrl}
          alt="post"
          className="w-full h-64 object-cover rounded-lg mb-3"
        />
        <p className="text-gray-300">{post.caption}</p>
      </div>

      {/* Actions */}
      <div className="flex justify-around px-6 py-3 border-t border-gray-700 text-gray-500">
        <button className="flex items-center gap-2 hover:text-red-500 transition">
          <FaHeart />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 hover:text-indigo-400 transition">
          <FaRegCommentDots />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 hover:text-green-500 transition">
          <FaShare />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
