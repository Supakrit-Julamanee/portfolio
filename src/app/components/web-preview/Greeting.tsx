'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Greeting = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    const links = [
        {
            src: "/greeting/greeting-1.png",
            alt: "Greeting Web Preview",
            label: "Greeting System",
            description: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">Tools:</span> React.js, Node.js, PostgreSQL, Face API
                    </p>
                    <p>
                        <span className="font-bold text-teal-400">Description:</span>
                        <br />- A greeting system that uses Face API to detect faces.
                        <br />- Predicts gender, mood, and name of the detected person.
                        <br />- Stores data and pictures in a database for history tracking.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-gray-900 py-10 px-4">
            {/* Header */}
            <div
                className="text-2xl font-semibold text-white p-4 mb-8 max-w-7xl mx-auto bg-teal-500 rounded-lg"
                data-aos="fade-down"
            >
                University Project / Greeting System
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto space-y-10">
                {links.map(({ src, alt, label, description }) => (
                    <div
                        key={alt}
                        className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded shadow-md text-white"
                        data-aos="fade-up"
                    >
                        {/* Image Section */}
                        <div
                            className="md:w-1/2 flex justify-center mb-4 md:mb-0"
                            data-aos="zoom-in"
                        >
                            <span className="hover:scale-105 transform transition duration-300">
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={400}
                                    height={250}
                                    className="rounded-lg shadow-lg"
                                />
                            </span>
                        </div>

                        {/* Description Section */}
                        <div className="md:w-1/2 md:pl-6">
                            <span
                                className="text-2xl font-bold text-teal-400 hover:text-teal-300"
                                data-aos="fade-right"
                            >
                                {label}
                            </span>
                            <div className="mt-4 text-gray-300">{description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Greeting;
