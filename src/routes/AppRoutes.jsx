import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Register,
  Login,
  VerifyOTPPage,
  ProfilePage,
  ReelsPage,
  HomePage,
  SearchPage,
  
} from "@pages";
import { Layout } from "@layouts";
import { CreatePost, ProtectedRoute} from "@components";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOTPPage />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
