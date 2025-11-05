import React from 'react'
import { Link } from "react-router-dom";
import { DollarSign, Calendar, Users, TrendingUp, CheckCircle2, Handshake } from "lucide-react";
import Card from '../Card/Card';

export default function Partner() {
    const data = [
        {
            icon: DollarSign,
            title: "Competitive Earnings",
            desc: "Earn up to 30% more than industry average with transparent pricing and no hidden fees",
        },
        {
            icon: Calendar,
            title: "Flexible Schedule",
            desc: "Choose when and where you work. Full-time, part-time, or occasional - you decide",
        },
        {
            icon: Users,
            title: "24/7 Support",
            desc: "Dedicated partner support team available around the clock to assist you",
        },
        {
            icon: TrendingUp,
            title: "Growth Opportunities",
            desc: "Access to high-volume routes and priority assignments for top performers",
        },
        {
            icon: CheckCircle2,
            title: "Quick Payments",
            desc: "Weekly direct deposits with transparent earnings tracking",
        },
        {
            icon: Handshake,
            title: "Professional Network",
            desc: "Join a community of professional drivers and expand your business",
        },
    ]
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600/80 to-blue-800/95 text-primary-foreground py-20">
                <div className="container mx-auto px-4 text-center text-amber-50">
                    <div className="inline-flex items-center justify-center bg-primary-foreground/10 w-16 h-16 rounded-full mb-6 animate-scale-in">
                        <Handshake className="h-10 w-10 rounded-4xl bg-gradient-to-br from-primary to-accent" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                        Become a Fleeto Partner
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in">
                        Join our growing network of professional drivers and transportation partners.
                        Earn more, drive on your schedule, and be part of a trusted logistics platform.
                    </p>
                    <Link
                        to="#"
                        className="text-blue-500 bg-amber-50 hover:bg-blue-500 hover:text-amber-50 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner with Fleeto?</h2>
                        <p className="text-muted-foreground text-1xl max-w-2xl mx-auto">
                            Enjoy competitive rates, flexible schedules, and comprehensive support.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-8">
                        {data.map((item, index) => (
                            <Card data={item} />
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Apply now and start earning with Fleeto. Our team will review your application
                        and get back to you within 48 hours.
                    </p>
                    <Link
                        to="#"
                        className="text-white bg-blue-500 hover:bg-blue-400 hover:text-amber-50 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Apply To Become a Partner
                    </Link>
                </div>
            </section>
        </div>
    );
}

