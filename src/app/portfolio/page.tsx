'use client';

import React from 'react';
import Aeki from '../components/web-preview/Aeki';
import Skyfrog from '../components/intern-ship-projects/Skyfrog';
import Greeting from '../components/web-preview/Greeting';
import Train from '../components/web-preview/Train';

const page = () => {
    return (
        <div>
            <Skyfrog />
            <Aeki />
            <Greeting/>
            <Train/>
        </div>
    );
}

export default page;
