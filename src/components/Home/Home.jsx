import React from 'react'
import { Link } from 'react-router-dom';
import heroImage from "../../assets/hero-truck.jpg";
import trackingImage from "../../assets/tracking.jpg";
import { Truck, MapPin, Shield, Clock, Package, Star } from "lucide-react";
import Card from '../Card/Card';
export default function Home() {
    const data = [
        {
            icon: Clock,
            title: "Fast Delivery",
            desc: "Same-day and express delivery options for urgent shipments"
        },
        {
            icon: MapPin,
            title: "Real-Time Tracking",
            desc: "Monitor your shipment's location 24/7 with live GPS tracking"
        },
        {
            icon: Shield,
            title: "100% Secure",
            desc: "Full insurance coverage and professional handling of all goods"
        },
        {
            icon: Truck,
            title: "Nationwide Coverage",
            desc: "Extensive network covering all major cities and routes",
        },
        {
            icon: Package,
            title: "Flexible Options",
            desc: "Multiple service tiers to match your budget and timeline",
        },
        {
            icon: Star,
            title: "Trusted Service",
            desc: "4.9/5 rating from over 50,000+ satisfied customers",
        },
    ]
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 to-blue-400/80" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-accent-foreground">
                    <h1 className="text-5xl text-amber-50 md:text-6xl font-bold mb-6 animate-fade-in">
                        Safe, Fast & Reliable
                        <br />
                        <span className="text-primary-foreground">Goods Transportation</span>
                    </h1>
                    <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in">
                        Track your shipments in real-time and experience hassle-free delivery with Fleeto's
                        trusted transportation network.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                        <Link
                            to="#"
                            className="text-blue-500 bg-amber-50 hover:bg-blue-500 hover:text-amber-50 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Book Now
                        </Link>
                        <Link
                            to="#"
                            className="text-blue-500 bg-amber-50 hover:bg-blue-500 hover:text-amber-50 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Track Shipment
                        </Link>
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-15">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Fleeto?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We provide industry-leading transportation services with a focus on safety, speed, and reliability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-8">
                        {data.map((item, index) => (
                            <Card data={item} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Tracking Highlight */}
            <section className="px-10 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Track Your Shipment in Real-Time
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Stay informed every step of the way with our advanced GPS tracking system. Get instant
                                notifications and real-time updates on your shipment's location and estimated delivery time.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2">
                                    <div className="bg-primary w-2 h-2 rounded-full" />
                                    <span>Live GPS location updates</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="bg-primary w-2 h-2 rounded-full" />
                                    <span>SMS and email notifications</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="bg-primary w-2 h-2 rounded-full" />
                                    <span>Accurate delivery time estimates</span>
                                </li>
                            </ul>
                            <Link
                                to="#"
                                className="text-white bg-blue-700 hover:bg-gray-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Track Your Order
                            </Link>
                        </div>
                        <div className="animate-scale-in">
                            <img
                                src={trackingImage}
                                alt="Real-time tracking interface on smartphone"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-700/95 to-blue-400/80 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl text-amber-50 font-bold mb-6">Ready to Ship with Fleeto?</h2>
                    <p className="text-xl mb-8 max-w-2xl text-amber-50 mx-auto opacity-95">
                        Join thousands of satisfied customers who trust Fleeto for their transportation needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-gray-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-blue-700 hover:bg-gray-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

