import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "@context/ProfileContext.jsx";
import  {uploadPostOrReel } from "../api/posts";

const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("post");
  const [mediaFile, setMediaFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [caption, setCaption] = useState("");
  const { profile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mediaFile) return alert("Please select a file");

    try {
      await uploadPostOrReel(profile.user.username, mediaFile, caption, activeTab);
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
    <div className="min-h-screen p-4 sm:p-6 text-gray-900 font-sans pb-24">
      {/* pb-24 adds extra bottom padding for mobile navigation bar */}
      <div className="max-w-md mx-auto">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6 text-gray-700 font-medium">
          <button
            className={`px-4 py-2 rounded-lg transition text-base ${
              activeTab === "post" ? "bg-white border border-gray-300" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => { setActiveTab("post"); setMediaFile(null); }}
          >
            Post
          </button>
          <button
            className={`px-4 py-2 rounded-lg transition text-base ${
              activeTab === "reel" ? "bg-white border border-gray-300" : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => { setActiveTab("reel"); setMediaFile(null); }}
          >
            Reel
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {activeTab === "post" ? "Create Post" : "Upload Reel"}
          </h2>

          <input
            type="file"
            accept={activeTab === "post" ? "image/*" : "video/*"}
            onChange={handleMediaChange}
            className="w-full p-2 rounded border border-gray-300 text-gray-700 text-base"
          />

          {mediaFile && (
            <div className="flex justify-center">
              {activeTab === "post" ? (
                <img
                  src={previewURL}
                  alt="Preview"
                  className="max-w-80 rounded-lg"
                />
              ) : (
                <video
                  src={previewURL}
                  controls
                  className="w-full max-h-64 rounded-lg"
                />
              )}
            </div>
          )}

          <textarea
            placeholder="Caption (optional)"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-gray-700 text-base resize-none"
            rows={3}
          />

          <button
            type="submit"
            className="w-full hover:bg-blue-600 rounded border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold text-base transition "
          >
            {activeTab === "post" ? "Post" : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
