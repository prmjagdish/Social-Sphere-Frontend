import api from "./apiService";

export const loginUser = async ({ username, password }) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data; 
};

export const signupUser = async (data) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};
