// pages/login.tsx

import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r  from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white p-6 shadow-md w-full max-w-md  space-y-14 rounded-xl m-4 ">
        {/* Logo */}
        <div className="flex justify-center mb-6  ">
          <img src="/matrial.png" className="h-13 w-13 mr-4" alt="matrial" /> <p className="text-lg text-gray-600 font-bold mt-4 ">MATRIAL</p><p className="text-gray-400 text-lg mt-4">PRO</p>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-300  text-gray-500">
            <img src="/google.png" className="h-5 w-5" alt="Google" />
            Google
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-2 py-2 rounded-full hover:bg-gray-300  text-gray-500">
            <img src="/facbook.png" className="h-5 w-5 " alt="Facebook" />
            Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300 "></div>
          <span className="px-4 text-gray-500 text-sm">or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* <div className="m-4 text-center text-gray-500 text-sm">or sign in with</div> */}

        {/* Form */}
        <form className="space-y-4">
          <p className="text-gray-500 font-bold">Username</p>
          <input
            type="text"
            className="w-full border-2 border-gray-200 text-gray-700 rounded-lg px-4 py-2 outline-blue-400 hover-text-black"
          />
          <p className="text-gray-500 font-bold">Password
          </p>
          <input
            type="password"

            className="w-full border-2 border-gray-200 text-gray-700 rounded-lg px-4 py-2 outline-blue-400"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span className="text-gray-500">Remember this Device</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full"
          >
            Sign In
          </button>
        </form>

        {/* Create Account Link */}
        <p className="text-center text-sm text-gray-600">
          New to MaterialPro?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}

