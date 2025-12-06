import api from "./apiClient";

export const uploadPostOrReel = (username, mediaFile, caption, type = "post") => {
  const formData = new FormData();
  formData.append("media", mediaFile);
  formData.append("caption", caption);

  const endpoint = type === "post" ? `/api/posts/${username}` : `/api/reels/${username}`;
  return api.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const fetchFeedPosts = async (page = 0, size = 10) => {
  const { data } = await api.get(`/api/posts/feed?page=${page}&size=${size}`);
  console.log("feedpost Data",data);
  return data;
}
