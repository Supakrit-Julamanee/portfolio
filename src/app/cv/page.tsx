'use client';

import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='bg-gray-800 min-h-screen flex justify-center items-center'>
            <div className='max-w-7xl mx-auto  '>
                <div className='grid grid-cols-2 gap-6 justify-items-center items-center'>
                    <Image
                        src='/cv-transcript/cv.png'
                        alt='cv'
                        width={400}
                        height={250}
                        className="rounded-lg shadow-lg"
                    />

                    <Image
                        src='/cv-transcript/transcript.png'
                        alt='cv'
                        width={400}
                        height={250}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default page