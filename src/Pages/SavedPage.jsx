import React from "react";

const savedPosts = [
  { id: 1, image: "https://cdn.pixabay.com/photo/2024/10/25/18/54/celebration-9149600_1280.jpg" },
  { id: 2, image: "https://source.unsplash.com/random/400x400?sig=2" },
  { id: 3, image: "https://source.unsplash.com/random/400x400?sig=3" },
  { id: 4, image: "https://source.unsplash.com/random/400x400?sig=4" },
  { id: 5, image: "https://source.unsplash.com/random/400x400?sig=5" },
  { id: 6, image: "https://source.unsplash.com/random/400x400?sig=6" },
];

const SavedPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-sky-400">Saved Posts</h2>

        {savedPosts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {savedPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square overflow-hidden rounded-lg border border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={post.image}
                  alt={`Saved ${post.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No saved posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
