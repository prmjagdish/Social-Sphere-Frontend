import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex ">
      <Sidebar/>
      <main className="flex-1 overflow-y-auto	min-h-screen bg-gray-900">
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
