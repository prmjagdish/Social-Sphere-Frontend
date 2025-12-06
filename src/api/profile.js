import api from "./apiClient";

export const getMyProfile = async () => {
  const response = await api.get("/api/profile/me");
  console.log("profile data",response.data);
  return response.data;
};

