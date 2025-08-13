import React, { useState } from "react";
import axios from "axios";
const ProfileEditForm = ({ username, setShowEditModal, setProfile }) => {
  const [editForm, setEditForm] = useState({
    name: "",
    bio: "",
  });

  

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSave = async () => {
    try {
      console.log(username);
      console.log(editForm);

      let imageUrl = null;

      if (file) {
        const formData = new FormData();
        formData.append("image", file);

        const uploadRes = await axios.post(
          "http://localhost:8080/api/images/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          }
        );

        imageUrl = uploadRes.data.url; // get Cloudinary URL
      }

      const payload = { ...editForm };
      if (imageUrl) payload.avatar = imageUrl;

  
      const response = await axios.put(
        `http://localhost:8080/api/profile/${username}/edit`,
        payload,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      alert("Profile updated successfully!");
      console.log("Updated profile:", response.data);

      setProfile((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          ...editForm,
        },
      }));

      setShowEditModal(false);
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update profile.");
    }
  };

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
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <input
            type="text"
            placeholder="Bio"
            value={editForm.bio}
            onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          <input
            type="file"
            placeholder="Upload photo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
          />

          {preview && (
            <div className="flex justify-center mt-2">
              <img
                src={preview}
                alt="preview"
                width="100"
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={() => setShowEditModal(false)}
            className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
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
