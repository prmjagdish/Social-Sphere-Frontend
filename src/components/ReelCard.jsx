// components/ReelCard.js
import React from "react";


const ReelCard = ({ reel, onClick }) => {
  return (
    <div
      onClick={() => onClick(reel)}
      className="relative cursor-pointer aspect-[9/16] overflow-hidden rounded-lg bg-black"
    >
      <video
        src={reel.videoUrl}
        muted
        className="object-cover w-full h-full"
        preload="metadata"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-2 text-xs text-white">
        {reel.caption.slice(0, 40)}...
      </div>
    </div>
  );
};

export default ReelCard;
