import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext} from "../Context/ProfileContext";
import {
  FaHome,
  FaSearch,
  FaVideo,
  FaBookmark,
  FaUser,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
const Sidebar = () => {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

   const { profile } = useContext(ProfileContext);

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/home" },
    { label: "Search", icon: <FaSearch />, path: "/search" },
    { label: "Reels", icon: <FaVideo />, path: "/reels" },
    { label: "Create", icon: <FiPlusSquare />, path: "/create" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
    { label: "Notifications", icon: <FaBell />, path: "/notifications" },
    // { label: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <>
      
      <aside className="hidden md:flex flex-col w-60 h-screen bg-gray-900 text-white shadow-lg">
        {/* Logo/Header */}
        <div className="px-6 py-6 border-b border-white/10">
          <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            Social Sphere
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(item.label);
                navigate(item.path); // 👈 Navigate to the route
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-sm ${
                active === item.label
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 mt-auto flex items-center gap-3 border-t border-white/10">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-md" />
          <div>
            <p className="text-sm font-semibold">{profile?.user?.name}</p>
            <p className="text-xs text-white/60">@{profile?.user?.username}</p>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-white/10 flex justify-between px-6 py-3 z-50">
        {menuItems.slice(0, 5).map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(item.label);
              navigate(item.path);
            }}
            className={`flex flex-col items-center text-xs ${
              active === item.label ? "text-white" : "text-white/60"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
