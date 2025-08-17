import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ReelsPage from "../Pages/ReelsPage";
import ProfilePage from "../Pages/ProfilePage";
import Layout from "../Layouts/Layout";
import Notification from "../Pages/Notification";
import SearchPage from "../Pages/SearchPage";
import SingupPage from "../Pages/SignupPage";
import CreatePost from "../Components/CreatePost";
import ProtectedRoute from "../Components/ProtectedRoute";
import SigninPage from "../Pages/SignIn/SigninPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SigninPage/> } />
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
