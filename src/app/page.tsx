'use client';

import React from 'react';
import TypeAnimetion from './components/TypeAnimetion';
import NextJsIcon from './components/icons/NextJsIcon';
import TailwindCssIcon from './components/icons/TailwindCssIcon';
import TypeScriptIcon from './components/icons/TypeScript';

const Page = () => {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col items-center md:items-end justify-center p-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 ">
        <TypeAnimetion />

        <div className="max-w-2xl mt-4 w-full">
          <p className="text-lg font-semibold text-white mb-2">Hello and welcome!</p>
          <p className="text-md font-semibold text-white mb-2">
            Hi, I am Bike, a highly motivated Computer Science student at KMUTNB. My portfolio showcases my full-stack web development skills using React.js, Node.js, and C#/.NET. I am passionate about building innovative projects and dedicated to continuous learning. Thanks for visiting!
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mt-6 flex items-center gap-4 text-white text-sm font-semibold">
          <span>Developed by:</span>
          <NextJsIcon />
          <TypeScriptIcon />
          <TailwindCssIcon />
        </div>
      </div>
    </div>
  );
};

export default Page;
