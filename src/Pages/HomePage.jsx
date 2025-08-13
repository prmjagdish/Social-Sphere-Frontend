import React from "react";
import MainLayout from "../Layouts/MainLayout";
import PostCard from "../Components/PostCard";
import posts from "../Data/Post";

const HomePage = () => {
  return (
    
    <MainLayout>
      {/* <div className="mb-6 text-white">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div> */}

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

    </MainLayout>
  );
};

export default HomePage;
