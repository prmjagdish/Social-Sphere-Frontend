import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Button from "../Components/FormElements/Button";
import InputField from "../Components/FormElements/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password";
    else if (formData.password !== formData.confirmPassword) 
      newErrors.confirmPassword = "Passwords do not match";
    
    return newErrors;
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/api/singup", {
        username: formData.email,
        password: formData.password,
      });

      console.log("Login success:", res.data);
      // Save token if you get one
      //localStorage.setItem("token", res.data.token);
    //   navigate("/home"); // or your dashboard
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      alert(err.response?.data || "Login failed.");
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 font-sans overflow-auto px-2">
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md 
        bg-white dark:bg-gray-950 rounded-2xl shadow-lg 
        shadow-blue-200/30 dark:shadow-gray-900/60 
        px-4 py-5 sm:px-5 sm:py-6 space-y-3"
      >
        <div className="text-center space-y-0.5 mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
            Sign Up
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            SocialSphere
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <InputField
            label="Full Name"
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
            type="text"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="Username or email"
          />

          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder={"New password"}
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

          <div className="flex justify-end text-xs">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <Button ButtonName="Sign Up" />
        </form>

        <div className="flex items-center text-xs text-gray-400 dark:text-gray-600 gap-2 mt-3">
          <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
          <span>OR</span>
          <hr className="flex-grow border-t border-gray-300 dark:border-gray-700" />
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 dark:border-gray-800 rounded-md text-xs text-red-600 hover:bg-red-50 dark:hover:bg-gray-800">
            <FaGoogle className="text-sm" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 border border-gray-300 dark:border-gray-800 rounded-md text-xs text-blue-700 hover:bg-blue-50 dark:hover:bg-gray-800">
            <FaFacebookF className="text-sm" /> Facebook
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
          Already have an account ?{" "}
          <Link to="/singin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
