import React, { useState } from "react";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ENDPOINTS } from "../api/config";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendOtpHandler = async () => {
    if (!formData.email.trim()) {
      setErrors({ ...errors, email: "Email is required before sending OTP" });
      return;
    }

    try {
      const res = await axios.post(ENDPOINTS.SEND_OTP, { email: formData.email });
      alert(res.data);
    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error.message);
      alert("Failed to send OTP. Try again.");
    }
  };

  const otpVerifyHandler = async () => {
    if (!formData.otp.trim()) {
      setErrors({ ...errors, otp: "Enter the OTP to verify" });
      return;
    }

    try {
      const res = await axios.post(ENDPOINTS.VERIFY_OTP, { email: formData.email, otp: formData.otp });
      console.log(res);
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
      alert("OTP verification failed.");
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password";
    if (!formData.otp.trim()) newErrors.otp = "OTP not verify";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    otpVerifyHandler();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post(
        ENDPOINTS.SIGNUP,
        { username: formData.fullName, email: formData.email, password: formData.password },
        { headers: { "Content-Type": "application/json" } }
      );
      navigate("/");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert(err.response?.data?.message || err.response?.data);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 font-sans px-2 text-gray-900">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-xl sm:text-2xl font-bold">Social Sphere</h2>
          <p className="text-sm text-gray-700">Sign Up</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField
            label="Username"
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder="Enter name"
          />

          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Enter email"
          />

          <div className="flex justify-end text-xs">
            <button
              type="button"
              onClick={sendOtpHandler}
              className="text-blue-600 hover:underline"
            >
              Send OTP
            </button>
          </div>

          <InputField
            label="Enter OTP"
            id="otp"
            name="otp"
            type="text"
            value={formData.otp}
            onChange={handleChange}
            error={errors.otp}
            placeholder="Enter OTP received in email"
          />

          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="New password"
          />

          <InputField
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Confirm password"
          />

          <Button ButtonName="Sign Up" />
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-700 text-xs mt-2">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
