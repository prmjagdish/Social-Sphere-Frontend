import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import InputField from "../Components/FormComponents/InputField";
import Button from "../Components/FormComponents/Button";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (isSignUp) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Confirm your password";
      else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 font-sans overflow-auto px-2">
      <div
        className="
          w-full max-w-xs            /* SMALL max card-width on mobile */
          sm:max-w-sm md:max-w-md   /* increase size on bigger screens */
          bg-white dark:bg-gray-950 rounded-2xl shadow-lg
          shadow-blue-200/30 dark:shadow-gray-900/60 
          px-4 py-5                 /* more compact padding on mobile */
          sm:px-5 sm:py-6           /* normal padding on sm+ screens */
          space-y-3
        "
      >
        <div className="">
          <div className="text-center space-y-0.5 mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
              {isSignUp ? "Sign up" : "Sign in"}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              SocialSphere
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {isSignUp && (
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
            )}

            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
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
              placeholder={isSignUp ? "New password" : "Password"}
            />

            {isSignUp && (
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
            )}

            <div className="flex justify-end text-xs">
              {!isSignUp && (
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              )}
            </div>

            <Button ButtonName={isSignUp ? "Sign Up" : "Login"} />
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
            {isSignUp ? "Already have an account ?" : "Don't have an account ?"}{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
