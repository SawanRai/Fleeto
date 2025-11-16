import React from 'react'
import { Package } from "lucide-react";
export default function About() {
    return (
        <div className="min-h-screen pt-16 pb-12 bg-secondary">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8 animate-fade-in">
                    <div className="inline-flex items-center justify-center text-blue-500 bg-blue-200 w-16 h-16 rounded-full mb-4">
                        <Package className="h-10 w-10 rounded-4xl" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Book a Shipment</h1>
                    <p className="text-muted-foreground mb-10">
                        Fill out the form below and we'll get your goods moving safely and quickly.
                    </p>

                    <div className="max-w-4xl mx-auto text-left bg-white p-10 rounded-2xl shadow-md mt-10 mb-10">
                        <h1 className="text-3xl font-bold mb-2">Shipment Details</h1>
                        <p className="text-gray-600 mb-8">Provide your shipment information for a quote</p>

                        {/* Contact Information */}
                        <h2 className="text-xl font-semibold mb-8">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Full Name *</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 font-medium">Email Address *</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block mb-1 font-medium">Phone Number *</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-3"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        {/* Pickup & Delivery */}
                        <h2 className="text-xl font-semibold mt-10 mb-4">Pickup & Delivery</h2>
                        <div className="mt-4">
                            <label className="block mb-1 font-medium">Pickup Address *</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-3"
                                rows="3"
                                placeholder="123 Main St, City, State, ZIP"
                            ></textarea>
                        </div>
                        <div className="mt-6">
                            <label className="block mb-1 font-medium">Delivery Address *</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-3"
                                rows="3"
                                placeholder="456 Oak Ave, City, State, ZIP"
                            ></textarea>
                        </div>

                        {/* Package Details */}
                        <h2 className="text-xl font-semibold mt-10 mb-4">Package Details</h2>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block mb-1 font-medium">Package Type *</label>
                                <select className="w-full border border-gray-300 rounded-lg p-3">
                                    <option>Select type</option>
                                    <option>Carton Box</option>
                                    <option>Parcel</option>
                                    <option>Frieght</option>
                                </select>
                            </div>


                            <div>
                                <label className="block mb-1 font-medium">Weight (kg) *</label>
                                <input
                                    type="number"
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    placeholder="10"
                                />
                            </div>
                        </div>


                        <div className="mt-6">
                            <label className="block mb-1 font-medium">Service Type *</label>
                            <select className="w-full border border-gray-300 rounded-lg p-3">
                                <option>Select service</option>
                                <option>Standard</option>
                                <option>Express</option>
                                <option>Overnight</option>
                            </select>
                        </div>


                        <div className="mt-6">
                            <label className="block mb-1 font-medium">Additional Notes</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg p-3"
                                rows="4"
                                placeholder="Any special handling instructions or requirements..."
                            ></textarea>
                        </div>


                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mt-10">
                            Request Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}