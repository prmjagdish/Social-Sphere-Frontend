export const API_BASE_URL = import.meta.env.VITE_API_URL;

export const ENDPOINTS = {
  SEND_OTP: `${API_BASE_URL}/auth/send-otp`,
  VERIFY_OTP: `${API_BASE_URL}/auth/verify-otp`,
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  LOGIN: `${API_BASE_URL}/auth/login`,
};
