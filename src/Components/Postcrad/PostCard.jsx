import React from "react";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

const PostCard = () => {
  return (
    <div className="bg-gray-900 rounded-xl shadow hover:shadow-lg transition duration-300">
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <p className="font-semibold text-gray-200">John Doe</p>
            <p className="text-xs text-gray-300">2 hours ago</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700 text-xl">⋯</button>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <div className="w-full h-64 bg-gray-900 rounded-lg"></div>
        <p className="text-gray-400 mb-3">
          Just explored the new React 18 features. Love how smooth transitions
          and suspense work now!
        </p>
      </div>

      {/* Post Actions */}
      <div className="flex justify-around px-6 py-3 border-t border-gray-200 text-gray-600">
        <button className="flex items-center gap-2 hover:text-red-500 transition">
          <FaHeart />
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2 hover:text-indigo-500 transition">
          <FaRegCommentDots />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 hover:text-green-600 transition">
          <FaShare />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
