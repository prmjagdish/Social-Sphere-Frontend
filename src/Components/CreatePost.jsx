import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ onAddPost, onAddReel }) => {
  
  const [activeTab, setActiveTab] = useState("post");
  const [mediaFile, setMediaFile] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMediaFile(URL.createObjectURL(file)); // local preview
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mediaFile) return alert("Please select a file");

    const newItem = {
      id: Date.now(),
      url: mediaFile,
      caption,
    };

    if (activeTab === "post") {
      onAddPost(newItem);
    } else {
      onAddReel(newItem);
    }

    setMediaFile(null);
    setCaption("");
    navigate("/profile"); // go back to profile
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

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
        >
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
                <img
                  src={mediaFile}
                  alt="Preview"
                  className="w-full max-h-64 object-cover rounded"
                />
              ) : (
                <video
                  src={mediaFile}
                  controls
                  className="w-full max-h-64 rounded"
                />
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
