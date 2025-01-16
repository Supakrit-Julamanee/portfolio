'use client';

import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeAnimetion = () => {
    return (
        <div className='text-white text-3xl font-bold'>
            <TypeAnimation
                sequence={[
                    'Bike Supakrit \" Software Developer \"',
                    1000,
                    'Bike Supakrit \" Full Stack Developer \"',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </div>
    )
}

export default TypeAnimetion