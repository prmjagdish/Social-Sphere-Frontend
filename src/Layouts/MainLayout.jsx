import React from "react";
import user from "../Data/User"

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 ">
      <main className="flex-1 px-4 md:px-8 py-6 overflow-y-auto">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-1/4 px-4 py-4 h-screen space-y-4 ">
        {/* Suggested Users */}
        <div className="bg-gray-900 p-4 rounded-xl shadow overflow-y-auto">
          <h3 className="text-lg text-gray-100 font-semibold mb-2">
            Suggested for you
          </h3>
          {[1, 1, 1, 1, 1, 1].map((_, i) => (
            <div key={i} className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div>
                  <img className="w-8 h-8 rounded-full" src={user.avatar} alt="" />
                </div>
                <div className="texhover:underlinet-sm font-small text-sm text-gray-300 flex flex-col">
                   <p className="">
                  {user.name}
                </p>
                <span className="text-xs">{user.username}</span>
                </div>
              </div>
              <button className="text-indigo-600 text-sm font-medium ">
                Follow
              </button>
            </div>
          ))}
        </div>


      </aside>
    </div>
  );
};

export default MainLayout;
