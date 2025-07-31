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
import SinginPage from "../Pages/SinginPage"
import SingupPage from "../Pages/SingupPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/singin" element={<SinginPage/> }/>
      {/* <Route path="/signup" element={<SingupPage/> }/>
      <Route path="/" element={<Layout />}> 
        <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/reels" element={<ReelsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/saved" element={<SavedPage />} /> */}
      {/* </Route> */}
    </Routes>  
  );
};

export default AppRoutes;
