import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import PostCard from "../Components/Postcrad/PostCard";

const ProfilePage = () => {
  const [showFollowers, setShowFollowers] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const user = {
    name: "Jagdish Parmar",
    username: "jagdish",
    bio: "Tech Enthusiast | Building cool stuff",
    avatar: "https://i.pravatar.cc/150?img=3",
    posts: 23,
    followers: 1200,
    following: 340,
  };

  const tabs = [
    { label: "Posts", key: "posts" },
    { label: "Reels", key: "reels" },
    { label: "Saved", key: "saved" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 overflow-y-auto h-screen scrollbar-hide">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-teal-500 shadow-lg mx-auto sm:mx-0"
        />

        <div className="text-center sm:text-left flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-300">
            {user.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">@{user.username}</p>
          <p className="mt-2 text-sm sm:text-base text-gray-300">{user.bio}</p>
        </div>

        <button className="mt-4 sm:mt-0 sm:ml-auto px-3 sm:px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-xs sm:text-sm font-medium flex items-center gap-2 shadow self-center sm:self-auto">
          <FaEdit className="text-sm sm:text-base" />
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-6 text-sm mb-6 text-gray-300">
        <div>{user.posts} Posts</div>
        <button
          onClick={() => setShowFollowers(true)}
          className="hover:text-teal-400 transition"
        >
          {user.followers} Followers
        </button>
        <div>{user.following} Following</div>
      </div>

      {/* Tabs */}
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

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <PostCard key={i} />
        ))}
      </div>

      {/* Followers Modal */}
      {showFollowers && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-gray-900 text-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Followers</h3>
            <ul className="space-y-2 text-sm">
              {["Ravi", "Nidhi", "Kiran", "Aman"].map((name, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-2 bg-gray-800 rounded"
                >
                  <span>{name}</span>
                  <button className="text-sky-400 hover:underline text-xs">
                    View
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowFollowers(false)}
              className="mt-4 text-sm text-gray-400 hover:text-white underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
