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
        <div className="bg-gray-800 min-h-screen flex flex-col items-center py-12">
            {/* Section for CV */}
            <section className="w-full max-w-7xl px-4 mb-12" data-aos="fade-up">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">CV</h2>
                <div className="flex justify-center">
                    <div className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
                        <Image
                            src="/cv-transcript/cv.png"
                            alt="CV Preview"
                            width={400}
                            height={750}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Section for GPA */}
            <section className="w-full max-w-7xl px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">GPA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                    {[1, 2, 3, 4].map((page) => (
                        <div
                            key={page}
                            className="relative rounded-lg overflow-hidden  hover:scale-105 transform transition duration-300 place-items-center grid"
                        >
                            <Image
                                src={`/cv-transcript/gpa_page-000${page}.jpg`}
                                alt={`Transcript Page ${page}`}
                                width={400}
                                height={750}
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Page;