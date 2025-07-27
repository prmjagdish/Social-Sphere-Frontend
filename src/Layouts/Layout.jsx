import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content (margin-left for desktop) */}
      <main className="flex-1  min-h-screen bg-gray-900">
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
