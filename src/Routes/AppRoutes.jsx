import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ReelsPage from "../Pages/ReelsPage";
import ProfilePage from "../Pages/ProfilePage";
import Layout from "../Layouts/Layout";
import Notification from "../Pages/Notification";
import SearchPage from "../Pages/SearchPage";
import SavedPage from "../Pages/SavedPage";
// import LoginPage from "../Pages/LoginPage";
import SinginPage from "../Pages/SinginPage";
import SingupPage from "../Pages/SingupPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<SinginPage />} />
      <Route path="/signup" element={<SingupPage />} />

      {/* Private Routes wrapped in Layout */}
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage/> }/>
        <Route path="/search" element={<Notification/> }/>
        {/* Add more as needed */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
