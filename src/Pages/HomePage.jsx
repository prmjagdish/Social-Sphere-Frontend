import React from "react";
import MainLayout from "../Layouts/MainLayout";
import PostCard from "../Components/Postcrad/PostCard";

const HomePage = () => {
  return (
    <MainLayout>
      {/* Search + Create Post */}
      <div className="mb-6 text-white">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-gray-900 p-4 rounded-xl text-white shadow mb-6">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300" />

          {/* Input */}
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full sm:flex-1 p-2 border rounded-full bg-gray-900 border-gray-300 outline-none"
          />

          {/* Button */}
          <button className="w-full sm:w-auto bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
            Post
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-6">
        <PostCard />
        <PostCard />
      </div>
    </MainLayout>
  );
};

export default HomePage;
