'use client';

import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className="bg-gray-800 min-h-screen flex justify-center items-center">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-center">
                    {/* CV Image */}
                    <Image
                        src="/cv-transcript/cv.png"
                        alt="CV Preview"
                        width={400}
                        height={250}
                        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />

                    {/* Transcript Image */}
                    <Image
                        src="/cv-transcript/transcript.png"
                        alt="Transcript Preview"
                        width={400}
                        height={250}
                        className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;