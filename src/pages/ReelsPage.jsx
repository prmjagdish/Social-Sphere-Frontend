import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaShare,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

import dummyReels from "@data/Reel";

const ReelsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentReel = dummyReels[currentIndex];
  const [likes, setLikes] = useState({});
  const [saves, setSaves] = useState({});
  const [showComments, setShowComments] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => {
      setCurrentIndex((prev) =>
        prev < dummyReels.length - 1 ? prev + 1 : prev
      );
    },
    onSwipedDown: () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    },
    trackTouch: true,
    preventScrollOnSwipe: true,
  });

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSaves((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = () => {
    alert("Share link copied!");
  };

  return (
    <div
      {...handlers}
      className="h-[90vh] md:h-screen w-full relative overflow-hidden flex items-center justify-center touch-none bg-gray-50"
    >
      <div className="h-[95vh] w-full max-w-[420px] mx-auto relative">

        <video
          key={currentReel.id}
          src={currentReel.videoUrl}
          className="h-full w-full object-cover rounded-lg shadow-md"
          autoPlay
          loop
          muted
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-gray-900 bg-gradient-to-t from-white via-white/50 to-transparent rounded-b-lg">
          <h3 className="text-lg font-semibold">{currentReel.username}</h3>
          <p className="text-sm mb-4">{currentReel.caption}</p>

          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 text-2xl text-gray-900">
            <button
              onClick={() => toggleLike(currentReel.id)}
              className="hover:scale-110 transition"
            >
              {likes[currentReel.id] ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <button
              onClick={() => setShowComments(true)}
              className="hover:scale-110 transition"
            >
              <FaRegComment />
            </button>

            <button
              onClick={handleShare}
              className="hover:scale-110 transition"
            >
              <FaShare />
            </button>

            <button
              onClick={() => toggleSave(currentReel.id)}
              className="hover:scale-110 transition"
            >
              {saves[currentReel.id] ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        </div>

        {/* {showComments && (
          <Comments />
        )} */}

      </div>
    </div>
  );
};

export default ReelsPage;
