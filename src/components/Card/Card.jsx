import React from 'react'
import { Truck, MapPin, Shield, Clock, Package, Star } from "lucide-react";
export default function Card({data,data2}) {
    return (
        <div className='border-border hover:shadow-2xl transition-all mx-auto mb-8 animate-fade-in'>
            <data.icon className='h-10 w-10 mx-auto mb-5 rounded-3xl text-blue-300'/>   
            <h3 className="text-xl text-center font-semibold mb-2">{data.title}</h3>
            <p className="text-muted-foreground text-center mx-5 mb-6">{data.desc}</p>
        </div>
    )
}


