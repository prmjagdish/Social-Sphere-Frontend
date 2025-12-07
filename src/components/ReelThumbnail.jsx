import React from "react";
import { Link } from "react-router-dom";

const ReelThumbnail = ({ reel }) => {
  return (
    <Link to={`/reel/${reel.id}`}>
      <div className="w-full aspect-square overflow-hidden group">
        <video
          src={reel.videoUrl}
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-full object-cover group-hover:opacity-80 transition duration-200"
        />
      </div>
    </Link>
  );
};

export default ReelThumbnail;
