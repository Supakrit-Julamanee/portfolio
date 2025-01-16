"use client";

import React from "react";
import Image from "next/image";

const Train = () => {
    const links = [
        {
            src: "/train/train-1.png",
            alt: "Online train ticket sales system Web Preview",
            label: "Online train ticket sales system",
            description: (
                <>
                    <p className="mb-2">
                        <span className="font-bold">Tools:</span> Vue.js, Node.js, Mongo db
                    </p>
                    <p>
                        <span className="font-bold text-teal-400">Description:</span>
                        <br />-  Web application for selling train tickets online.
                        <br />- Select from the origin station to the destination station, to find trains that can be used for travel.
                        <br />-  Choose a seat and  can  print train tickets from the website after payment.
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-gray-900  py-10 px-4">

            <div className="text-2xl font-semibold text-white p-2 mb-8 max-w-7xl mx-auto bg-teal-500 rounded-lg">University Project  /
                Online train ticket sales system </div>

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

export default Train;