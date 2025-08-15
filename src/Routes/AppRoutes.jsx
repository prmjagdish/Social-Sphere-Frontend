import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ReelsPage from "../Pages/ReelsPage";
import ProfilePage from "../Pages/ProfilePage";
import Layout from "../Layouts/Layout";
import Notification from "../Pages/Notification";
import SearchPage from "../Pages/SearchPage";
import SinginPage from "../Pages/SigninPage";
import SingupPage from "../Pages/SignupPage";
import CreatePost from "../Components/CreatePost";
import ProtectedRoute from "../Components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SinginPage />} />
      <Route path="/signup" element={<SingupPage />} />
      <Route element={<Layout />}>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/create" element={<CreatePost />} />
        {/* onAddPost={(newPost) => setPosts([...posts, newPost])}
              onAddReel={(newReel) => setReels([...reels, newReel])} */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/notifications" element={<Notification />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
