import React, { useState } from "react";
import { Eye, EyeOff, Info } from "lucide-react";
import { Menu, X, Truck } from "lucide-react";

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-xl p-10 rounded-3xl shadow-lg border border-gray-200">

                {/* Logo */}
                <div className="text-center  mb-8">
                    <h1 className="text-3xl font-bold text-blue-600 flex justify-center items-center gap-2">
                        <Truck color="#FFFFFF" className="h-10 w-10 bg-blue-500 rounded-lg p-2 text-primary-foreground" />
                        Fleeto
                    </h1>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center">Create Your Fleeto Account</h2>
                <p className="text-gray-500 text-center mb-8">
                    Secure & verified onboarding for MSMEs and Transporters.
                </p>

                {/* Form */}
                <div className="space-y-6">

                    {/* Name + Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Full Name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Company Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="Auntrim Corevery"
                            />
                        </div>
                    </div>

                    {/* Email + Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="email@example.com"
                            />
                            <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                    </div>

                    {/* Mobile + Confirm Password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Mobile Number</label>
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium mb-1">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 pr-10"
                                placeholder="Confirm Password"
                            />
                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                            <p className="text-red-500 text-xs mt-1">Passwords do match</p>
                        </div>
                    </div>

                    {/* User Type */}
                    <div>
                        <label className="text-sm font-semibold mb-1 flex items-center gap-2">
                            User Type <Info size={16} className="text-yellow-500" />
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg bg-white">
                            <option>Select account type</option>
                            <option>Transporter</option>
                            <option>MSME Business</option>
                        </select>
                    </div>

                    {/* Company Optional */}
                    <div>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Transporter Company / Fleet Name (optional)"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4" />
                        <p className="text-sm">
                            I agree to Fleeto Terms and{" "}
                            <span className="text-blue-600">Privacy Policy</span>.
                        </p>
                    </div>

                    {/* Button */}
                    <button className="w-full py-3 mt-2 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition">
                        Create Account
                    </button>

                    {/* Login */}
                    <p className="text-center mt-2 text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-600 font-medium">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
