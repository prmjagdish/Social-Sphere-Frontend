import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900">
      <main className="flex-1 px-4 md:px-8 py-6 overflow-y-auto scrollb">
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
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <p className="text-sm font-medium text-gray-300">
                  User {i + 1}
                </p>
              </div>
              <button className="text-indigo-600 text-sm font-medium hover:underline">
                Follow
              </button>
            </div>
          ))}
        </div>

        {/* Trending */}
        <div className="bg-gray-900 text-gray-100 p-2 rounded-xl shadow">
          <h3 className="text-lg  font-semibold mb-3">Trending</h3>
          <ul className="space-y-2 text-sm px-2 text-gray-300">
            <li>#ReactJS</li>
            <li>#IndiaElections</li>
            <li>#Crypto</li>
            <li>#Crypto</li>
            <li>#AIRevolution</li>
            <li>#AIRevolution</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MainLayout;
