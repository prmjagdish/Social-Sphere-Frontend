import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Button from "../../Components/Button";
import InputField from "../../Components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/authService";

const SigninPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = await loginUser(formData);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white font-sans px-2 text-gray-900">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3">
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-xl sm:text-2xl font-bold">Social Sphere</h2>
          <p className="text-sm text-gray-700">Sign In</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField
            label="Username"
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />

          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Button ButtonName="Login" />
        </form>

        {/* OR Divider */}
        <div className="flex items-center text-gray-500 text-xs gap-2 mt-3">
          <hr className="flex-grow border-t border-gray-300" />
          <span>OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-2 mt-2 mb-1">
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 rounded-md text-xs text-red-600 hover:bg-red-50">
            <FaGoogle className="text-sm" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 rounded-md text-xs text-blue-700 hover:bg-blue-50">
            <FaFacebookF className="text-sm" /> Facebook
          </button>
        </div>

        {/* Signup Text */}
        <p className="text-center text-gray-700 text-xs mt-2">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
