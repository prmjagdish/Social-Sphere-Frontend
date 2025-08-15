import React from "react";
import { Link } from "react-router-dom";
import { Heart, MessageCircle } from "lucide-react";

const PostThumbnail = ({ post }) => {
  
  if (!post?.imageUrl) return null;

  return (
    <Link to={`/post/${post.id}`} className="relative group block">
      {/* Image */}
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={post?.imageUrl}
          alt={post?.caption || "Post"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay (hidden until hover) */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center gap-6
                   bg-black/40 opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 text-white font-semibold text-lg"
      >
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5" /> {post?.likes || 0}
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" /> {post.comments?.length || 0}
        </div>
      </div> */}
    </Link>
  );
};

export default PostThumbnail;
