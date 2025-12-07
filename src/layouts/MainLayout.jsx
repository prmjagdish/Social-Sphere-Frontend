import React from "react";
import user from "@data/User";
import { useState } from "react";

const MainLayout = ({ children }) => {
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Postsfeed */}
      <main className="flex-1 h-screen md:px-8 py-6 overflow-y-auto scrollbar-hide bg-white shadow-sm  mx-auto">
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block w-1/3">
        <div className="bg-white h-screen p-5  shadow-sm overflow-y-auto scrollbar-hide">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-5">
            Suggested for you
          </h3>

          {/* Suggested Users */}
          <div className="space-y-2">
            {user.suggestedUsers.slice(0, visibleCount).map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition"
              >
                {/* User Info */}
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full border border-gray-200"
                    src={u.avatar}
                    alt={u.name}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-800">
                      {u.name}
                    </p>
                    <span className="text-xs text-gray-400">{u.username}</span>
                  </div>
                </div>

                {/* Follow Button */}
                <button className="px-4 py-1.5  text-sm font-semibold rounded-md text-gray-900 border border-gray-300 hover:bg-gray-200 transition-colors">
                  Follow
                </button>
              </div>
            ))}

            {visibleCount < user.suggestedUsers.length && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setVisibleCount(visibleCount + 5)}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Show more
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MainLayout;
