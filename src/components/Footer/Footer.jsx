import React from 'react'
import { Link } from 'react-router-dom';
import { Truck, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
export default function Footer() {
    return (
        <footer className="px-10 bg-gradient-to-r from-blue-700/95 to-blue-500/80 text-accent-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary bg-blue-500 rounded-lg p-2">
                                <Truck color="#FFFFFF" className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl text-amber-50 font-bold">Fleeto</span>
                        </div>
                        <p className="text-sm text-amber-50 opacity-90">
                            Safe, fast, and reliable goods transportation you can trust.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-amber-50 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm opacity-90 text-amber-50 hover:opacity-100 transition-opacity">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm opacity-90 text-amber-50 hover:opacity-100 transition-opacity">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/track" className="text-sm opacity-90 text-amber-50 hover:opacity-100 transition-opacity">
                                    Track Order
                                </Link>
                            </li>
                            <li>
                                <Link to="/partner" className="text-sm opacity-90 text-amber-50 hover:opacity-100 transition-opacity">
                                    Become a Partner
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-amber-50 mb-4">Services</h3>
                        <ul className="space-y-2 text-amber-50">
                            <li className="text-sm opacity-90">Same-Day Delivery</li>
                            <li className="text-sm opacity-90">Express Shipping</li>
                            <li className="text-sm opacity-90">Freight Transport</li>
                            <li className="text-sm opacity-90">Real-Time Tracking</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-amber-50 mb-4">Contact</h3>
                        <ul className="space-y-2 text-amber-50">
                            <li className="text-sm opacity-90">support@fleeto.com</li>
                            <li className="text-sm opacity-90">1-800-FLEETO</li>
                            <li className="text-sm opacity-90">24/7 Customer Support</li>
                        </ul>
                        <div className="flex gap-3  mt-4">
                            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-accent-foreground/20 pt-6 text-center">
                    <p className="text-sm text-amber-50 opacity-90">
                        © {new Date().getFullYear()} Fleeto. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
