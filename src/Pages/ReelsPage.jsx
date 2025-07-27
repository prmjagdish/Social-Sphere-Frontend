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

const dummyReels = [
  {
    id: 1,
    username: "@naturelover",
    caption: "Beautiful morning in the mountains 🌄",
    videoUrl:
      "https://videos.pexels.com/video-files/33105613/14111513_1440_2560_30fps.mp4",
  },
  {
    id: 2,
    username: "@techguru",
    caption: "This robot dog is the future 🤖",
    videoUrl:
      "https://videos.pexels.com/video-files/4754212/4754212-uhd_1440_2732_25fps.mp4",
  },
  {
    id: 3,
    username: "@traveljunkie",
    caption: "Surfing in Bali 🏄‍♂️",
    videoUrl:
      "https://videos.pexels.com/video-files/7251768/7251768-uhd_1440_2560_25fps.mp4",
  },
];

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
      className="h-[90vh]  md:h-screen w-full bg-gray-900 relative overflow-hidden flex items-center justify-center touch-none"
    >
      {/* Reel Wrapper with Max Width */}
      <div className="h-[95vh] w-full max-w-[420px] mx-auto relative">
        {/* Video */}
        <video
          key={currentReel.id}
          src={currentReel.videoUrl}
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black via-black/50 to-transparent">
          <h3 className="text-lg font-semibold">{currentReel.username}</h3>
          <p className="text-sm mb-4">{currentReel.caption}</p>

          {/* Action buttons (positioned better for all sizes) */}
          <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 text-2xl">
            {/* Like */}
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

            {/* Comment */}
            <button
              onClick={() => setShowComments(true)}
              className="hover:scale-110 transition"
            >
              <FaRegComment />
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="hover:scale-110 transition"
            >
              <FaShare />
            </button>

            {/* Save */}
            <button
              onClick={() => toggleSave(currentReel.id)}
              className="hover:scale-110 transition"
            >
              {saves[currentReel.id] ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        </div>

        {/* Comment Modal */}
        {showComments && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-lg max-h-[70vh] overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Comments
              </h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>
                  <strong>@user123:</strong> Wow, beautiful!
                </li>
                <li>
                  <strong>@travelgram:</strong> I want to go there 🔥
                </li>
                <li>
                  <strong>@naturefan:</strong> Nature heals 🌱
                </li>
              </ul>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="w-full border rounded-full px-4 py-2 text-sm outline-none"
                />
              </div>
              <button
                onClick={() => setShowComments(false)}
                className="mt-4 text-blue-600 underline text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReelsPage;
