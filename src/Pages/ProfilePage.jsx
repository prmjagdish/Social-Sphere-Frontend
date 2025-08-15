import React, { useState, useContext } from "react";
import ProfileHeader from "../Components/ProfileHeader";
import dummyReels from "../Data/Reel";
import savedPosts from "../Data/Saved";
import posts from "../Data/Post";
import PostThumbnail from "../Components/PostThumbnail";
import SavedThumbnail from "../Components/SavedThumbnail";
import ReelThumbnail from "../Components/ReelThumbnail";
import { ProfileContext } from "../Context/ProfileContext";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const { profile } = useContext(ProfileContext);

  const tabs = [
    { label: "Posts", key: "posts" },
    { label: "Reels", key: "reels" },
    { label: "Saved", key: "saved" },
  ];

  const renderTabContent = () => {
    if (activeTab === "posts") {
      if (!profile?.posts || profile.posts?.length === 0) {
        return <p className="flex text text-gray-400">No posts yet</p>;
      }

      return profile.posts.map((post) => (
        <PostThumbnail key={post.id} post={post} />
      ));
    }

    if (activeTab === "reels") {
      return dummyReels.map((reel) => (
        <ReelThumbnail key={reel.id} reel={reel} />
      ));
    }

    if (activeTab === "saved") {
      return savedPosts.map((item) => (
        <SavedThumbnail key={`${item.type}-${item.id}`} item={item} />
      ));
    }

    return null;
  };

  return (
    <div className="h-screen pb-12 px-4 sm:px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto h-screen">
        <ProfileHeader />

        <div className="flex gap-6 border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pb-2 font-semibold transition ${
                activeTab === tab.key
                  ? "border-b-2 border-teal-400 text-teal-300"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
