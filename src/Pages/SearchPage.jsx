import React, { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Amit Patel", username: "amit123", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 2, name: "Neha Sharma", username: "neha_sharma", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 3, name: "Ravi Kumar", username: "ravi_k", avatar: "https://i.pravatar.cc/150?img=8" },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = dummyUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-sky-400">Search</h2>

        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 mb-6"
        />

        <div className="space-y-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow hover:bg-gray-700 transition"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 sm:w-12 sm:h-12 rounded-full object-cover mx-auto sm:mx-0"
                />
                <div className="text-center sm:text-left flex-1">
                  <p className="text-base font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-400">@{user.username}</p>
                </div>
                <button className="text-sky-400 hover:underline text-sm sm:text-base text-center sm:text-right">
                  View
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
