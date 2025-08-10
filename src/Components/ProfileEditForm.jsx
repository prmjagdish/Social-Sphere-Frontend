import React from "react";

const ProfileEditForm = ({ editForm, callEditform, setShowEditModal }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center ">
      <div className="bg-gray-800 rounded-3xl w-full max-w-md px-4 py-4 rounded-xl shadow-2xl text-white backdrop-blur-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide">
          Edit Profile
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={editForm.name}
            onChange={(e) => callEditform({ ...editForm, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <input
            type="text"
            placeholder="Bio"
            value={editForm.bio}
            onChange={(e) => callEditform({ ...editForm, bio: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <input
            type="text"
            placeholder="Avatar URL"
            value={editForm.avatar}
            onChange={(e) => callEditform({ ...editForm, avatar: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={() => setShowEditModal(false)}
            className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowEditModal(false)}
            className="px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;
