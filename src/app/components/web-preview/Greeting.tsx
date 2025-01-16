"use client";

import React from "react";
import Image from "next/image";

const Greeting = () => {
    const links = [
        {
            src: "/greeting/greeting-1.png",
            alt: "Greeting Web Preview",
            label: "Greeting System",
            description: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">Tools:</span> React.js, Node.js, Posgresql, Face Api
                    </p>
                    <p>
                        <span className="font-bold text-teal-400">Description:</span>
                        <br />- Greeting system that uses face api to help detect faces.
                        <br />- The system can predict the gender, mood, and name of the person whose face is detected.
                        <br />- Data and pictures are stored in a database for checking past history.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-gray-900  py-10 px-4">

            <div className="text-2xl font-semibold text-white p-2 mb-8 max-w-7xl mx-auto bg-teal-500 rounded-lg">University Project  / Greeting System </div>

            <div className="max-w-7xl mx-auto space-y-10">
                {links.map(({ src, alt, label, description }) => (
                    <div
                        key={alt}
                        className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded shadow-md text-white"
                    >
                        <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                            <span
                                rel="noopener noreferrer"
                                className="hover:scale-105 transform transition duration-300"
                            >
                                <Image
                                    src={src}
                                    alt={alt}
                                    width={400}
                                    height={250}
                                    className="rounded-lg shadow-lg"
                                />
                            </span>
                        </div>
                        <div className="md:w-1/2 md:pl-6">
                            <span
                                rel="noopener noreferrer"
                                className="text-2xl font-bold text-teal-400 hover:text-teal-300"
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