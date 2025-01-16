'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true, 
        });
    }, []);

    return (
        <div className="bg-gray-800 min-h-screen flex justify-center items-center">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-center">
                    {/* CV Image */}
                    <div data-aos="fade-right">
                        <Image
                            src="/cv-transcript/cv.png"
                            alt="CV Preview"
                            width={400}
                            height={250}
                            className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                        />
                    </div>

                    {/* Transcript Image */}
                    <div data-aos="fade-left">
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
        </div>
    );
};

export default Page;