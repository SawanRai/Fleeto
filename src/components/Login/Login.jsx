import React, { useState } from "react";
import { User } from "lucide-react";

export default function Login() {
  const [otp, setOtp] = useState("");

  return (
    <div className="min-h-screen pt-16 pb-12 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8 animate-fade-in">
          
          {/* Icon */}
          <div className="inline-flex items-center justify-center text-blue-500 bg-blue-200 w-16 h-16 rounded-full mb-4">
            <User className="h-10 w-10" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">Login to Your Account</h1>
          <p className="text-muted-foreground mb-10">
            Enter your phone number, OTP, and PIN to access your dashboard.
          </p>

          {/* Card */}
          <div className="max-w-4xl mx-auto text-left bg-white p-10 rounded-2xl shadow-md mt-10 mb-10">

            {/* Header */}
            <h1 className="text-3xl font-bold mb-2">Login Details</h1>
            <p className="text-gray-600 mb-8">
              Provide your login information to continue
            </p>

            {/* User Type */}
            <h2 className="text-xl font-semibold mb-6">Select Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                <input type="radio" name="userType" value="business" defaultChecked />
                <span className="font-medium">Business Owner</span>
              </label>

              <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-100">
                <input type="radio" name="userType" value="delivery" />
                <span className="font-medium">Delivery Partner</span>
              </label>
            </div>

            {/* Phone */}
            <h2 className="text-xl font-semibold mt-10 mb-4">Phone Number</h2>
            <input
              type="text"
              placeholder="Enter 10 digit phone number"
              maxLength={10}
              className="w-full border border-gray-300 rounded-lg p-3"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />

            {/* OTP */}
            <h2 className="text-xl font-semibold mt-10 mb-4">Enter OTP</h2>
            <div className="grid grid-cols-6 gap-3 max-w-sm">
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="border border-gray-300 rounded-lg p-3 text-center text-lg"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                />
              ))}
            </div>

            {/* PIN */}
            <h2 className="text-xl font-semibold mt-10 mb-4">Enter PIN</h2>
            <input
              type="password"
              maxLength={4}
              placeholder="Enter 4 digit PIN"
              className="w-full border border-gray-300 rounded-lg p-3"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
            />

            <div className="text-right mt-2">
              <a href="/forgot-pin" className="text-blue-600 hover:underline text-sm">
                Forgot PIN?
              </a>
            </div>

            {/* Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mt-10">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}   