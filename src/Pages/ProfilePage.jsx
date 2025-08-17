import React, { useState, useContext } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import dummyReels from "../Data/Reel";
import savedPosts from "../Data/Saved";
import PostThumbnail from "../Components/PostThumbnail";
import SavedThumbnail from "../Components/SavedThumbnail";
import ReelThumbnail from "../Components/ReelThumbnail";
import { ProfileContext } from "../Context/ProfileContext";
import { useNavigate } from "react-router-dom";


const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const { profile } = useContext(ProfileContext);

  const navigate = useNavigate();

  

  const tabs = [
    { label: "Posts", key: "posts" },
    { label: "Reels", key: "reels" },
    { label: "Saved", key: "saved" },
  ];

  const renderTabContent = () => {
    if (activeTab === "posts") {
      if (!profile?.posts?.length) {
        return <p className="text-center text-gray-400 py-10">No posts yet</p>;
      }
      return profile?.posts.map((post) => (
        <div
          key={post?.id}
          onClick={() => navigate(`/home?scrollTo=${post.id || post._id}`)}
          className="cursor-pointer"
        >
          <PostThumbnail key={post.id} post={post} />
        </div>
      ));
    }

    if (activeTab === "reels") {
      return dummyReels.map((reel) => (
        <ReelThumbnail key={reel?.id} reel={reel} />
      ));
    }
    if (activeTab === "saved") {
      return savedPosts.map((item) => (
        <SavedThumbnail key={`${item.type}-${item.id}`} item={item} />
      ));
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-6 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <ProfileHeader />
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-300 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pb-2 font-semibold transition ${
                activeTab === tab.key
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
