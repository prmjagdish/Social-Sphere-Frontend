import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../Context/ProfileContext";
import axios from "axios";

// { onAddPost, onAddReel }
const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("post");
  const [mediaFile, setMediaFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();
  const {profile} = useContext(ProfileContext);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file); // keep file for upload
      setPreviewURL(URL.createObjectURL(file)); // local preview
      console.log(profile.user?.username);
    }
  };

  const handleSubmit = async (e) => {
    console.log(profile.user?.username);

    e.preventDefault();
    if (!mediaFile) return alert("Please select a file");

    try {
      const formData = new FormData();
      formData.append("media", mediaFile);
      formData.append("caption", caption);

      console.log(formData);

      // Example API endpoint
      const endpoint =
        activeTab === "post"
          ? `http://localhost:8080/api/posts/${profile.user.username}`
          : `http://localhost:8080/api/reels/${profile.user.username}`;

      const token = localStorage.getItem("token"); // if auth needed

      const res = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // optional if auth
        },
      });

      // Optional: update parent state
      // if (activeTab === "post") {
      //   onAddPost(res.data);
      // } else {
      //   onAddReel(res.data);
      // }

      // Reset form
      setMediaFile(null);
      setPreviewURL(null);
      setCaption("");
      navigate("/profile");
  
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Failed to upload");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center gap-4 mb-6 text-sky-300 font-bold">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "post" ? "bg-gray-800" : "bg-gray-700"
            }`}
            onClick={() => {
              setActiveTab("post");
              setMediaFile(null);
            }}
          >
            Create Post
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "reel" ? "bg-gray-800" : "bg-gray-700"
            }`}
            onClick={() => {
              setActiveTab("reel");
              setMediaFile(null);
            }}
          >
            Upload Reel
          </button>
        </div>

        <form  onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl text-sky-300 font-semibold mb-4">
            {activeTab === "post" ? "Create a New Post" : "Upload a Reel"}
          </h2>

          <input
            type="file"
            accept={activeTab === "post" ? "image/*" : "video/*"}
            onChange={handleMediaChange}
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          />

          {mediaFile && (
            <div className="mb-4">
              {activeTab === "post" ? (
                <div className="flex justify-center mt-2">
                  <img
                    src={previewURL}
                    alt="Preview"
                    className="w-100 max-h-64 object-cover rounded"
                  />
                </div>
              ) : (
                <div className="flex justify-center mt-2">
                  <video
                    src={previewURL}
                    controls
                    className="w-full max-h-64 rounded"
                  />
                </div>
              )}
            </div>
          )}

          <textarea
            placeholder="Caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
          />

          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-blue-700 py-2 rounded text-white"
          >
            {activeTab === "post" ? "Post" : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
