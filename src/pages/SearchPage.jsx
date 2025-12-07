import React, { useState } from "react";
import user from "@data/User";

const SearchPage = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5); 

  const filteredUsers = user.suggestedUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-4 flex justify-center">
      <div className="w-full max-w-md">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name or username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Results */}
        {filteredUsers.length > 0 ? (
          <>
            <div className="space-y-3">
              {filteredUsers.slice(0, visibleCount).map((u) => (
                <div
                  key={u.id}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={u.avatar}
                      alt={u.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{u.name}</p>
                      <p className="text-gray-500 text-sm">{u.username}</p>
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-1.5 text-sm font-semibold rounded-md text-gray-900 border border-gray-300 hover:bg-gray-200 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {visibleCount < filteredUsers.length && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setVisibleCount(visibleCount + 5)}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  Show more
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500 text-center">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
