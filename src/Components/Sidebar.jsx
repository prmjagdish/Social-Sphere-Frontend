import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import {
  FaHome,
  FaSearch,
  FaVideo,
  FaUser,
} from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";

const Sidebar = () => {
  const [active, setActive] = useState("/home");
  const navigate = useNavigate();
  const { profile } = useContext(ProfileContext);

  const menuItems = [
    { label: "Home", icon: <FaHome />, path: "/home" },
    { label: "Search", icon: <FaSearch />, path: "/search" },
    { label: "Reels", icon: <FaVideo />, path: "/reels" },
    { label: "Create", icon: <FiPlusSquare />, path: "/create" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
  ];

  return (
    <>
      <aside className="hidden md:flex flex-col w-60 h-screen bg-white text-gray-900 shadow-lg">
        <div className="px-6 py-6 border-b border-gray-200 flex items-center justify-center">
          <img src="src/assets/logo.png" alt="" className="w-30 h-20" />
        </div>

        <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(item.label);
                navigate(item.path);
              }}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-sm ${
                active === item.label
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        
        <div onClick={() => navigate("/profile")} className="p-4 mt-auto flex items-center gap-3 border-t border-gray-200">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
            {profile?.user?.name?.[0] || "U"}
          </div>
          <div>
            <p className="text-sm font-semibold">{profile?.user?.name}</p>
            <p className="text-xs text-gray-500">{profile?.user?.username}</p>
          </div>
        </div>
      </aside>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between px-6 py-3 z-50">
        {menuItems.slice(0, 5).map((item, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(item.label);
              navigate(item.path);
            }}
            className={`flex flex-col items-center text-xs ${
              active === item.label ? "text-gray-900" : "text-gray-400"
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
